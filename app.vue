<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :throttle="0" />
    <NuxtPage />
    <Toaster :duration="2000" position="top-center" close-button richColors />
  </NuxtLayout>
</template>

<script setup>
import { useRankStore } from "~/stores/rank";
import { useAuthStore } from "~/stores/auth";
import { useVoucherStore } from "~/stores/voucher";

const auth = useCookie("auth");

const rankStore = useRankStore();
const authStore = useAuthStore();
const voucherStore = useVoucherStore();

onMounted(() => {
  if (auth.value?.isLogin && auth.value.user) {
    rankStore.getRank();
    voucherStore.listenToVoucherBroadcast(authStore.user.id);
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
