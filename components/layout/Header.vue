<template>
  <div>
    <div class="al-pre-header">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <ul class="al-pull-right al-list-inline">
              <li>
                <NuxtLink :to="{ name: 'login' }"> Đăng Nhập </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="{ name: 'register' }" class="al-register-border">
                  Đăng Ký
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <nav
      class="navbar navbar-expand-lg al-header-section bg-white"
      :class="[{ 'al-header-active': isActive }]"
    >
      <div class="container">
        <NuxtLink :to="{ name: 'index' }" class="navbar-brand">
          AlphaCinema
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

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 al-pull-right">
            <li v-for="(item, index) in navMenu" :key="index" class="nav-item">
              <NuxtLink
                :to="item.link"
                exact-active-class="active"
                class="nav-link"
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
const auth = useCookie("auth");

const authStore = useAuthStore();

const logout = async () => {
  await authStore.logout();
};

defineProps({
  isActive: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
