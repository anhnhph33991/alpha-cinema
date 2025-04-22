<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :throttle="0" />
    <NuxtPage />
    <!-- top-right -->
    <Toaster :duration="2000" position="top-center" close-button richColors />
  </NuxtLayout>
</template>

<script setup>
import { toast, Toaster } from "vue-sonner";
import { useRankStore } from "~/stores/rank";
const auth = useCookie("auth");

const echo = useEcho();

const callEcho = () => {
  const channel = echo.channel("voucher");

  channel.listen("RealTimeVouCherEvent", (data) => {
    if (data.user_id == useAuthStore().user.id) {
      toast.success(`Bạn vừa nhận được voucher: ${data.title}`);
    }
  });
};

onMounted(() => {
  if (auth.value && auth.value.isLogin && auth.value.user) {
    useRankStore().getRank();
    callEcho();
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
