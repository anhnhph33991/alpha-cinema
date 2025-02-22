<template>
  <header :class="['header-section', { 'header-active': isActive }]">
    <div class="container">
      <div class="header-wrapper">
        <div class="logo">
          <NuxtLink :to="{ name: 'index' }">
            <img src="/theme/img/logo/logo.png" alt="logo" />
          </NuxtLink>
        </div>
        <ul class="menu">
          <li v-for="(item, index) in navMenu" :key="index">
            <NuxtLink :to="item.link" exact-active-class="active">
              {{ item.title }}
            </NuxtLink>
          </li>

          <li class="header-button pr-0">
            <NuxtLink :to="{ name: 'login' }">Đăng Nhập</NuxtLink>
          </li>
        </ul>
        <div class="header-bar d-lg-none">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { navMenu } from "~/constants/menus";

defineProps({
  isActive: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
