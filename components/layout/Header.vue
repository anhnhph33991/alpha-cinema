<template>
  <div>
    <div class="al-pre-header">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <ul class="al-pull-right al-list-inline">
              <template v-if="authStore.isLogin">
                <li>
                  <NuxtLink :to="{ name: 'account' }">
                    Xin chào: {{ authStore.user.name }}
                  </NuxtLink>
                </li>
                <li>
                  <a
                    @click.prevent="logout"
                    class="al-register-border al-cursor-pointer"
                  >
                    <LogOut :size="16" />
                  </a>
                </li>
              </template>

              <template v-else>
                <li>
                  <NuxtLink :to="{ name: 'login' }"> Đăng Nhập </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    :to="{ name: 'register' }"
                    class="al-register-border"
                  >
                    Đăng Ký
                  </NuxtLink>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <nav
      class="navbar navbar-expand-lg al-header-section bg-white"
      :class="[{ 'al-header-active': isActive }]"
    >
      <div class="container al-padding-header">
        <NuxtLink :to="{ name: 'index' }" class="navbar-brand">
          <img
            v-if="settings.length > 0 && settings[0].website_logo"
            class="logo-img border-radius-20"
            :alt="settings[0].site_name"
            :src="formattedImage(settings[0].website_logo)"
          />
        </NuxtLink>

        <div class="branch-dropdown">
          <a-cascader
             :value="value"
            :options="branchOptions"
            expand-trigger="hover"
            placeholder="Vui lòng chọn"
            popupClassName="custom-dropdown"
            :dropdownStyle="{
              maxHeight: 'unset',
              overflow: 'visible',
              height: 'auto',
              minWidth: '200px',
            }"
          />
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 al-pull-right">
            <li v-for="(item, index) in navMenu" :key="index" class="nav-item">
              <NuxtLink
                :to="item.link"
                exact-active-class="active"
                class="nav-link al-nav-link"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { navMenu } from "~/constants/menus";
import { useAuthStore } from "~/stores/auth";
import { useBranchStore } from "~/stores/branch";
import { LogOut } from "lucide-vue-next";
import { fetchSettingService } from "@/services/setting";

const settings = ref([]);

const authStore = useAuthStore();
const branchStore = useBranchStore();
const value = ref([]);
const isActive = ref(false);

const formattedImage = (image) => {
  const baseUrl =
    import.meta.env.VITE_API_BASE_URL || "https://alphacinema.test/";
  return image ? `${baseUrl}${image}` : "";
};
const logout = async () => {
  await authStore.logout();
};

const branchOptions = computed(() => {
  return branchStore.branchs.map((branch) => ({
    value: branch.id,
    label: branch.name,
    children:
      branch.cinemas?.map((cinema) => ({
        value: cinema.id,
        label: cinema.name,
      })) || [],
  }));
});

onMounted(async () => {
  try {
    await branchStore.listBranch();
    const settingsData = await Promise.all([fetchSettingService()]);

    settings.value = settingsData;
    console.log("settig", settings.value);
  } catch (error) {
    console.error("Lỗi khi lấy danh sách chi nhánh:", error);
  }
});
</script>


<style>
.al-header-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
}

.al-padding-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
}

.navbar-nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.navbar-nav .nav-item {
  flex: none;
  text-align: center;
  padding: 0 10px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "PT Sans Narrow", Arial, sans-serif;
  font-size: large;
}

.branch-dropdown {
  margin: 0 30px;
  font-size: 16px;
}

.ant-cascader-menus {
  min-height: auto !important;
  max-height: 300px !important;
  overflow: hidden !important;
}

.ant-cascader-menu {
  width: 200px !important;
  max-height: none !important;
  min-height: auto !important;
  overflow: visible !important;
  height: auto !important;
  padding: 0 !important;
  margin: 0 !important;
}

.ant-cascader-menu-item {
  padding: 10px 10px !important;
  position: relative;
  border-bottom: 1px solid #ddd !important;
}

.ant-cascader-menu-item:last-child {
  border-bottom: none !important;
}

.ant-cascader-menu-item:hover {
  background-color: #2a73dd !important;
  color: white !important;
  width: 100% !important;
}

.ant-cascader-menu-item-active {
  background-color: #2a73dd !important;
  color: white !important;
}

.custom-dropdown {
  max-height: none !important;
  overflow: visible !important;
  height: auto !important;
  min-width: 200px !important;
  position: absolute !important;
  z-index: 9999 !important;
}

.custom-dropdown::before {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: #2a73dd;
  position: absolute;
  top: 0;
  left: 0;
}
.logo-img {
  width: 130px;
  height: auto;
}
</style>
