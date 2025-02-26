export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useCookie("auth");

  if (auth.value.user && auth.value.user.type_user === 1) {
    return navigateTo("https://alphacinema.me/admin", { external: true });
  }
});
