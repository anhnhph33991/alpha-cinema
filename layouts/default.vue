<template>
  <div>
    <!-- ==========Preloader========== -->
    <!-- <CommonPreLoader /> -->
    <!-- ==========Preloader========== -->

    <!-- ==========Overlay========== -->
    <!-- <div class="overlay"></div> -->

    <a-back-top />
    <!-- ==========Overlay========== -->

    <!-- ==========Header-Section========== -->
    <LayoutHeader :isActive="isHeaderActive" />

    <NuxtMarquee
      v-if="showMarquee"
      :pauseOnHover="true"
      :speed="10"
      :loop="1"
      :style="{ padding: '20px 0' }"
    >
      <small>
        {{ messageMarquee }}
      </small>
    </NuxtMarquee>
    <!-- ==========Header-Section========== -->

    <!-- ==========View========== -->
    <div class="al-bg-light">
      <slot />
    </div>
    <!-- ==========View========== -->

    <!-- ==========Footer-Section========== -->
    <LayoutFooter />
    <!-- ==========Footer-Section========== -->
  </div>
</template>

<script setup>
import { useWindowScroll } from "@vueuse/core";
import "~/assets/main.css";
import "~/assets/style.css";
import "~/assets/form.css";
import "~/assets/movie.css";
import "~/assets/antdv.css";

const { y } = useWindowScroll();

const isScrollToTopVisible = ref(false);
const isHeaderActive = ref(false);

const showMarquee = ref(false);
const messageMarquee = ref("Chúc mừng bạn vừa được voucher: Giảm giá 20k");
const authCookie = useCookie("auth");
const userId = computed(() => authCookie.value?.user?.id);
const echo = useEcho();

const callEchoVoucher = () => {
  if (!userId.value) {
    console.log("user chua login");
    return;
  }

  console.log("Đang lắng nghe private channel", `voucher.${userId.value}`);

  const privateChannel = echo.private(`voucher.${userId.value}`);

  privateChannel.listen("RealTimeVouCherEvent", (data) => {
    console.log("Nhận dữ liệu realtime voucher");
    console.log(data);
  });

  console.log("end private channel");
};

onMounted(async () => {
  if (userId.value) {
    console.log(`voucher.${userId.value}`);

    console.log(userId.value);
    callEchoVoucher();
  }
});

const updateScrollState = () => {
  isHeaderActive.value = y.value > 1;
  isScrollToTopVisible.value = y.value > 500;
};

watchEffect(() => {
  updateScrollState();
});
</script>
