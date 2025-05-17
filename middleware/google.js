import { useAuthStore } from "#imports";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authGoogle = useCookie("auth_google", {
    maxAge: 60 * 60 * 24, // Lưu 1 ngày
  });
  const router = useRouter();

  const authStore = useAuthStore();

  if (to.query.data) {
    try {
      // Giải mã dữ liệu
      const decodedData = JSON.parse(atob(decodeURIComponent(to.query.data)));

      // Lưu vào cookie
      authGoogle.value = decodedData;

      const authData = JSON.parse(authGoogle.value);

      // Lưu vào store
      authStore.isLogin = authData.isLogin;
      authStore.token = authData.token;
      authStore.user = authData.user;
      authStore.vat = authData.vat;
      console.log("update auth store");

      authGoogle.value = null;

      await nextTick();

      return router.replace("/", { replace: true });
    } catch (error) {
      console.error("Lỗi khi giải mã auth data:", error);
      return router.replace("/login");
    }
  } else {
    console.error("Google login thất bại");
    return router.replace("/login");
  }
});
