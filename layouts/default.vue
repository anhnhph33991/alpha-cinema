<template>
  <div>
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

/**
 * Updates UI states based on current vertical scroll position:
 * - Activates the header when the user scrolls past 1px.
 * - Shows the "scroll to top" button when the user scrolls more than 500px.
 */
const updateScrollState = () => {
  isHeaderActive.value = y.value > 1;
  isScrollToTopVisible.value = y.value > 500;
};
/**
 * Automatically watches reactive dependencies (like `y`)
 * Updates scroll-related UI state whenever the scroll position changes.
 */
watchEffect(() => {
  updateScrollState();
});
</script>
