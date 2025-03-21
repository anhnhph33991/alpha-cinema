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
