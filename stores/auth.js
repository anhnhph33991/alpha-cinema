import { toast } from "vue-sonner";
import {
  getCsrfTokenService,
  loginService,
  logoutService,
  registerService,
  resetPasswordService,
  sendOtpService,
  verifyOtpService,
} from "~/services/auth";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const user = ref({
      name: "",
      email: "",
      avatar: "",
      phone: "",
      address: "",
      gender: "",
      birthday: "",
      service_id: "",
      service_name: "",
      type_user: "",
      rank: {},
      cinema: {},
    });
    const token = ref("");
    const isLogin = ref(false);
    const router = useRouter();
    const isLoading = ref(false);
    const errors = reactive({});
    const resetPasswordCookie = useCookie("reset_password_cookie", {
      maxAge: 300,
    });

    /**
     * Xử lý login
     */
    const login = async (data) => {
      isLoading.value = true;
      try {
        await getCsrfTokenService();
        const response = await loginService(data);

        if (response.status) {
          token.value = response.data.token;
          user.value = response.data.user;
          isLogin.value = true;
        }

        console.log(response);

        toast.success("Đăng nhập thành công");
        router.push({ name: "index" });
      } catch (error) {
        console.log(error);
        isLoading.value = false;
        toast.error("Đăng nhập thất bại");
      }
    };

    const register = async (data) => {
      try {
        const response = await registerService(data);

        if (response.status) {
          token.value = response.data.token;
          user.value = response.data.user;
          isLogin.value = true;
        }

        toast.success("Đăng ký thành công");
        router.push({ name: "index" });
      } catch (error) {
        toast.error("Đăng ký thất bại, vui lòng thử lại");
        console.log(error);
      }
    };

    const logout = async () => {
      try {
        await logoutService();

        token.value = "";
        user.value = {};
        isLogin.value = false;
        isLoading.value = false;

        toast.success("Đăng xuất thành công");
        router.push({ name: "index" });
      } catch (error) {
        toast.error("lỗi");
        console.log(error);
      }
    };

    const sendOtp = async (email) => {
      isLoading.value = true;
      try {
        const response = await sendOtpService(email);

        console.log(response);

        resetPasswordCookie.value = {
          ...(resetPasswordCookie.value || {}),
          email: email,
        };

        toast.success(response.message);
        isLoading.value = false;
      } catch (error) {
        isLoading.value = false;

        if (error && error.errors) {
          errors.email = error.errors.email;
        }

        console.log(error);
        toast.error("Có lỗi xảy ra");
      }
    };

    const verifyOtp = async (data) => {
      isLoading.value = true;
      try {
        const response = await verifyOtpService(data);

        if (response.data) {
          resetPasswordCookie.value = {
            ...(resetPasswordCookie.value || {}),
            verify_otp: response.data.verify_otp,
            otp: data.otp,
          };
        }

        console.log(response);

        toast.success(`${response.message}`);

        isLoading.value = false;
      } catch (error) {
        isLoading.value = false;

        toast.error(`${error.error}`);

        console.log(error);
      }
    };

    const resetPassword = async (data) => {
      try {
        const response = await resetPasswordService(data);
        toast.success(`${response.message}`);
        console.log(response);

        resetPasswordCookie.value = null;
        navigateTo("/login");
      } catch (error) {
        console.log(error);
        // toast.error('Có lỗi xảy ra');
      }
    };

    return {
      user,
      token,
      errors,
      isLogin,
      login,
      register,
      logout,
      isLoading,
      sendOtp,
      verifyOtp,
      resetPassword,
    };
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.cookies({
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      }),
      omit: ["errors"],
    },
  }
);
