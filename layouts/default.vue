<template>
  <div>
    <!-- ==========Preloader========== -->
    <CommonPreLoader />
    <!-- ==========Preloader========== -->

    <!-- ==========Overlay========== -->
    <div class="overlay"></div>

    <CommonScrollToTop :isActive="isScrollToTopVisible" />
    <!-- ==========Overlay========== -->

    <!-- ==========Header-Section========== -->
    <LayoutHeader :isActive="isHeaderActive" />
    <!-- ==========Header-Section========== -->

    <!-- ==========View========== -->
    <slot />
    <!-- ==========View========== -->

    <!-- ==========Footer-Section========== -->
    <LayoutFooter />
    <!-- ==========Footer-Section========== -->
  </div>
</template>

<script setup>
import { useWindowScroll } from "@vueuse/core";
import "~/assets/main.css";

const { y } = useWindowScroll();

const isScrollToTopVisible = ref(false);
const isHeaderActive = ref(false);

const updateScrollState = () => {
  isHeaderActive.value = y.value > 1;
  isScrollToTopVisible.value = y.value > 500;
};

// useServerHead({
//   title: "Alpha Cinema",
//   meta: [
//     { name: "description", content: "Alpha Cinema Booking Website" },
//     { name: "keywords", content: "ticket, booking, online" },
//     { charset: "utf-8" },
//     { name: "viewport", content: "width=device-width, initial-scale=1.0" },
//   ],
//   link: [
//     { rel: "icon", type: "image/x-icon", href: "/theme/img/favicon.png" },
//     { rel: "stylesheet", href: "/theme/css/bootstrap.min.css" },
//     { rel: "stylesheet", href: "/theme/css/fontawesome.min.css" },
//     { rel: "stylesheet", href: "/theme/css/animate.css" },
//     { rel: "stylesheet", href: "/theme/css/magnific-popup.css" },
//     { rel: "stylesheet", href: "/theme/css/odometer.css" },
//     { rel: "stylesheet", href: "/theme/css/owl.carousel.min.css" },
//     { rel: "stylesheet", href: "/theme/css/owl.theme.default.min.css" },
//     { rel: "stylesheet", href: "/theme/css/nice-select.css" },
//     { rel: "stylesheet", href: "/theme/css/jquery.animatedheadline.css" },
//     { rel: "stylesheet", href: "/theme/css/style.css" },
//   ],
//   script: [
//     { src: "/theme/js/jquery-3.6.0.min.js", body: true },
//     { src: "/theme/js/modernizr-3.6.0.min.js", body: true },
//     { src: "/theme/js/plugins.js", body: true },
//     { src: "/theme/js/bootstrap.bundle.min.js", body: true },
//     { src: "/theme/js/heandline.js", body: true },
//     { src: "/theme/js/isotope.pkgd.min.js", body: true },
//     { src: "/theme/js/magnific-popup.min.js", body: true },
//     { src: "/theme/js/owl.carousel.min.js", body: true },
//     { src: "/theme/js/wow.min.js", body: true },
//     { src: "/theme/js/countdown.min.js", body: true },
//     { src: "/theme/js/odometer.min.js", body: true },
//     { src: "/theme/js/viewport.jquery.js", body: true },
//     { src: "/theme/js/nice-select.js", body: true },
//     { src: "/theme/js/main.js", body: true },
//   ],
// });

// useHead({
//   title: "Alpha Cinema",
//   meta: [
//     { name: "description", content: "Alpha Cinema Booking Website" },
//     { name: "keywords", content: "ticket, booking, online" },
//     { charset: "utf-8" },
//     { name: "viewport", content: "width=device-width, initial-scale=1.0" },
//   ],
//   link: [
//     { rel: "icon", type: "image/x-icon", href: "/theme/img/favicon.png" },
//     { rel: "stylesheet", href: "/theme/css/bootstrap.min.css" },
//     { rel: "stylesheet", href: "/theme/css/fontawesome.min.css" },
//     { rel: "stylesheet", href: "/theme/css/animate.css" },
//     { rel: "stylesheet", href: "/theme/css/magnific-popup.css" },
//     { rel: "stylesheet", href: "/theme/css/odometer.css" },
//     { rel: "stylesheet", href: "/theme/css/owl.carousel.min.css" },
//     { rel: "stylesheet", href: "/theme/css/owl.theme.default.min.css" },
//     { rel: "stylesheet", href: "/theme/css/nice-select.css" },
//     { rel: "stylesheet", href: "/theme/css/jquery.animatedheadline.css" },
//     { rel: "stylesheet", href: "/theme/css/style.css" },
//   ],
//   script: [
//     { src: "/theme/js/jquery-3.6.0.min.js", body: true },
//     { src: "/theme/js/modernizr-3.6.0.min.js", body: true },
//     { src: "/theme/js/plugins.js", body: true },
//     { src: "/theme/js/bootstrap.bundle.min.js", body: true },
//     { src: "/theme/js/heandline.js", body: true },
//     { src: "/theme/js/isotope.pkgd.min.js", body: true },
//     { src: "/theme/js/magnific-popup.min.js", body: true },
//     { src: "/theme/js/owl.carousel.min.js", body: true },
//     { src: "/theme/js/wow.min.js", body: true },
//     { src: "/theme/js/countdown.min.js", body: true },
//     { src: "/theme/js/odometer.min.js", body: true },
//     { src: "/theme/js/viewport.jquery.js", body: true },
//     { src: "/theme/js/nice-select.js", body: true },
//     { src: "/theme/js/main.js", body: true },
//   ],
// });

watchEffect(() => {
  updateScrollState();
});
</script>
