import Vue3Toastify, { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.vueApp.use(Vue3Toastify, {
    autoClose: 1000,
    transition: "zoom",
    toastId: "luxchill",
  });
  NuxtApp.provide("toast", toast);
});
