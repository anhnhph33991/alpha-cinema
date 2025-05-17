export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useCookie("auth");

  if (auth.value?.isLogin) {
    return navigateTo({ name: "index" });
  }
});
