export default defineNuxtRouteMiddleware((to, from) => {
  const status = useCookie("status");

  if (!status.value || status.value != 1) {
    return navigateTo("/");
  }
});
