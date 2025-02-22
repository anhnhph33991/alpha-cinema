<template>
  <div>
    <NuxtLoadingIndicator :throttle="0" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <Toaster :duration="2000" position="top-right" close-button richColors />
  </div>
</template>

<script setup>
import { Toaster } from "vue-sonner";

// useHead({
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
//
// const route = useRoute();
//
// const scripts = [
//   "/theme/js/jquery-3.6.0.min.js",
//   "/theme/js/modernizr-3.6.0.min.js",
//   "/theme/js/plugins.js",
//   "/theme/js/bootstrap.bundle.min.js",
//   "/theme/js/heandline.js",
//   "/theme/js/isotope.pkgd.min.js",
//   "/theme/js/magnific-popup.min.js",
//   "/theme/js/owl.carousel.min.js",
//   "/theme/js/wow.min.js",
//   "/theme/js/countdown.min.js",
//   "/theme/js/odometer.min.js",
//   "/theme/js/viewport.jquery.js",
//   "/theme/js/nice-select.js",
//   "/theme/js/main.js",
// ];
//
// const removeScripts = () => {
//   scripts.forEach((src) => {
//     const existingScript = document.querySelector(`script[src="${src}"]`);
//     if (existingScript) {
//       existingScript.remove();
//       console.log("đã xóa");
//     }
//   });
// };
//
// const loadScript = (src) => {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.async = true;
//     script.onload = () => {
//       resolve();
//     };
//
//     script.onerror = () => reject(`Lỗi tải script ${src}`);
//     document.body.appendChild(script);
//   });
// };
//
// const loadAllScripts = async () => {
//   try {
//     removeScripts();
//     await Promise.all(scripts.map((src) => loadScript(src)));
//   } catch (error) {
//     console.error(error);
//   }
// };
//
// watch(
//   () => route.path,
//   () => {
//     loadAllScripts();
//   }
// );
</script>
