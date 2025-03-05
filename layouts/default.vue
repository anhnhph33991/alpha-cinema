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

const updateScrollState = () => {
  isHeaderActive.value = y.value > 1;
  isScrollToTopVisible.value = y.value > 500;
};

watchEffect(() => {
  updateScrollState();
});
</script>
