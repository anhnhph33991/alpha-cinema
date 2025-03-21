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
      <div class="container al-padding-header al-with-header">
        <NuxtLink :to="{ name: 'index' }" class="navbar-brand">
          <!-- <img
            v-if="settings.length > 0 && settings[0].website_logo"
            class="logo-img border-radius-20"
            :alt="settings[0].site_name"
            :src="formattedImage(settings[0].website_logo)"
          /> -->
          AlphaCinema
        </NuxtLink>
        <div class="branch-dropdown d-none d-xl-block">
          <ClientOnly>
            <a-cascader
              v-if="branchOptions.length > 0"
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
              :displayRender="(labels) => labels.labels?.at(-1) || 'no data'"
              @change="handleChangeCinema"
              :allowClear="false"
            />
          </ClientOnly>
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

        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 al-pull-right">
              <li
                v-for="(item, index) in navMenu"
                :key="index"
                class="nav-item"
              >
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
import { toast } from "vue-sonner";
import { fetchSettingService } from "@/services/setting";

const settings = ref([]);

const authStore = useAuthStore();
const branchStore = useBranchStore();
const value = ref([]);
const selectedBranchId = ref(null);
const selectedCinemaId = ref(null);

const selectCinemaBranch = useCookie("selectCinemaBranch");

const props = defineProps({
  isActive: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const formattedImage = (image) => {
  const baseUrl =
    import.meta.env.VITE_API_BASE_URL || "https://alphacinema.me/";
  return image
    ? `${baseUrl}${image}`
    : "https://img.pikbest.com/origin/10/49/11/85tpIkbEsTcjq.png!w700wp";
};

const logout = async () => {
  await authStore.logout();
};

const branchOptions = computed(() => {
  return branchStore.branchs.map((branch) => ({
    value: branch.id,
    label: branch.name,
    disabled: !branch.cinemas || branch.cinemas.length === 0,
    children:
      branch.cinemas?.map((cinema) => ({
        value: cinema.id,
        label: cinema.name,
      })) || [],
  }));
});
/**
 * Lấy id của chi nhánh và rạp chiếu
 *
 * @param value - data chi nhánh, rạp chiếu
 */
const handleChangeCinema = (newValue) => {
  if (newValue.length < 2) {
    toast.error("Ấn lung tung gì đấy ? 🤬");
    return;
  }

  const result = {
    branch_id: newValue[0],
    cinema_id: newValue[1],
  };

  selectCinemaBranch.value = result;

  console.log("select value new");
  console.log(result);

  value.value = newValue;
  [selectedBranchId.value, selectedCinemaId.value] = newValue;
};

// watch(
//   branchOptions,
//   async (newOptions) => {
//     if (!newOptions.length) return;

//     const firstBranch = newOptions.find((branch) => branch.children.length > 0);
//     if (firstBranch) {
//       const firstCinema = firstBranch.children[0];

//       value.value = [firstBranch.value, firstCinema.value];
//       selectedBranchId.value = firstBranch.value;
//       selectedCinemaId.value = firstCinema.value;

//       await nextTick();

//       console.log("Mặc định đã chọn:", value.value);
//     }
//   },
//   { immediate: true }
// );

watch(
  selectCinemaBranch,
  (newValue) => {
    if (newValue) {
      console.log("data select moi");
      console.log(newValue);

      value.value = [newValue.branch_id, newValue.cinema_id];

      selectedBranchId.value = newValue.branch_id;
      selectedCinemaId.value = newValue.cinema_id;
    }
  },
  { immediate: true }
);

onMounted(async () => {
  try {
    await branchStore.listBranch();
    const settingsData = await Promise.all([fetchSettingService()]);
  } catch (error) {
    console.error("Lỗi khi lấy danh sách chi nhánh:", error);
  }
});
</script>

<style>
/* :where(.css-dev-only-do-not-override-1p3hq3p).ant-select .ant-select-clear */

.al-header-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
}

.al-with-header {
  width: 100%;
  min-width: auto;
}

.navbar-nav {
  display: flex;
  justify-content: center;
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
</style>
