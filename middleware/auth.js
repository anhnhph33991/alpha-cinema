import { toast } from "vue-sonner";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useCookie("auth");

  const parsedAuth = auth.value ?? null;

  if (!parsedAuth || !parsedAuth.isLogin) {
    toast.warning("Vui lòng đăng nhập");
    return navigateTo({
      name: "login",
    });
  }
});
