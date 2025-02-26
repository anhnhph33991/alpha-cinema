import { toast } from "vue-sonner";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useCookie("auth");

  const parsedAuth = auth.value ?? null;

  if (parsedAuth || parsedAuth.isLogin) {
    toast.warning("Ngáo à cdmm");
    return navigateTo({
      name: "index",
    });
  }
});
