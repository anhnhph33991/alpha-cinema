import { toast } from "vue-sonner";
/**
 * Checks if the user is logged in via cookie
 * If not logged in, shows a warning toast and redirects to the login page
 */
export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useCookie("auth");

  if (!auth.value?.isLogin) {
    toast.warning("Vui lòng đăng nhập");
    return navigateTo({ name: "login" });
  }
});
