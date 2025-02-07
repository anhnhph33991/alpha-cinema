<template>
  <div>
    <!-- ==========Preloader========== -->
    <div class="preloader">
      <div class="preloader-inner">
        <div class="preloader-icon">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- ==========Preloader========== -->

    <!-- ==========Overlay========== -->
    <div class="overlay"></div>
    <a href="#" class="scrollToTop">
      <i class="fal fa-long-arrow-alt-up"></i>
    </a>
    <!-- ==========Overlay========== -->

    <!-- ==========Header-Section========== -->
    <AppHeader />
    <!-- ==========Header-Section========== -->

    <!-- ==========Banner-Section========== -->
    <AppBanner />
    <!-- ==========Banner-Section========== -->

    <!-- ==========View========== -->
    <slot />
    <!-- ==========View========== -->

    <!-- ==========Footer-Section========== -->
    <AppFooter />
    <!-- ==========Footer-Section========== -->
  </div>
</template>

<style lang="scss" scoped></style>
