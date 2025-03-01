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
          <img src="/assets/logo.png" alt="" />
        </NuxtLink>

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
        <div>
          <template>
            <a-cascader
              v-model:value="value"
              :options="options"
              expand-trigger="hover"
              placeholder="Vui lòng chọn"
            />
          </template>
        </div>
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
import { navMenu } from "~/constants/menus";
import { useAuthStore } from "~/stores/auth";
import { useBranchStore } from "~/stores/branch";
import { LogOut } from "lucide-vue-next";
import { ref } from "vue";

const auth = useCookie("auth");
const authStore = useAuthStore();
const branchStore = useBranchStore();
const options = ref([]);
const value = ref([]);
const logout = async () => {
  await authStore.logout();
};
gi
const props = defineProps({
  isActive: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const formatDataToOptions = (data) => {
  console.log("Dữ liệu trước khi format:", data); // Log kiểm tra dữ liệu từ API
  return data.map((item) => ({
    value: item.id,  // ID của branch
    label: item.name, // Tên của branch
    children: item.cinemas ? item.cinemas.map((cinema) => ({
      value: cinema.id, // ID của cinema
      label: cinema.name, // Tên của cinema
    })) : [],
  }));
};
onMounted(async () => {
  await branchStore.listBranch();
  // formatDataToOptions(branchStore.branchs);
});
watchEffect(() => {
 
    options.value = formatDataToOptions(branchStore.branchs);
   
  })
// const options = [
//   {
//     value: "Minh Hải",
//     label: "Minh Hải",
//     children: [
//       {
//         value: "hangzhou",
//         label: "Hangzhou",
//       },
//     ],
//   },
//   {
//     value: "jiangsu",
//     label: "Jiangsu",
//     children: [
//       {
//         value: "nanjing",
//         label: "Nanjing",
//       },
//     ],
//   },
// ];
// const value = ref([]);
</script>
