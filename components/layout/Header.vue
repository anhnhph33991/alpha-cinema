<template>
  <div>
    <div class="al-pre-header">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <ul class="al-pull-right al-list-inline">
              <template v-if="authStore.isLogin">
                <li>
                  <NuxtLink :to="{ name: 'index' }">
                    <!-- <span> Xin chào: {{ authStore.user.name }} </span> -->
                    Xin chào: {{ authStore.user.name }}
                  </NuxtLink>
                </li>
                <li>
                  <a
                    @click.prevent="logout"
                    class="al-register-border al-cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-logout"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
                      />
                      <path d="M9 12h12l-3 -3" />
                      <path d="M18 15l3 -3" />
                    </svg>
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

const props = defineProps({
  isActive: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
