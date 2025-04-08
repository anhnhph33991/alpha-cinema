<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :throttle="0" />
    <NuxtPage />
    <Toaster :duration="2000" position="top-right" close-button richColors />
  </NuxtLayout>
</template>

<script setup>
import { Toaster } from "vue-sonner";
import { useRankStore } from "~/stores/rank";
const auth = useCookie("auth");

onMounted(() => {
  if (auth.value && auth.value.isLogin && auth.value.user) {
    useRankStore().getRank();
  }
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
