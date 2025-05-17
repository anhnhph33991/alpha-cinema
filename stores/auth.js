import { toast } from "vue-sonner";
import {
  changePasswordService,
  confirmVerifyEmailService,
  loginService,
  logoutService,
  registerService,
  checkUserResgisterService,
  resetPasswordService,
  sendOtpService,
  verifyEmailService,
  verifyOtpService,
} from "~/services/auth";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const user = ref({
      name: "",
      email: "",
      email_verified_at: "",
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
    const vat = ref("");
    const router = useRouter();
    const isLoading = ref(false);
    const errors = reactive({});
    const success = reactive({});
    const resetPasswordCookie = useCookie("reset_password_cookie", {
      maxAge: 300,
    });

    const rankByUser = useCookie("rank");

    /**
     * Xử lý login
     */
    const login = async (data) => {
      try {
        const response = await loginService(data);

        if (response.status) {
          token.value = response.data.token;
          user.value = response.data.user;
          isLogin.value = true;
          vat.value = response.data.vat;
        }

        isLoading.value = true;

        toast.success("Đăng nhập thành công");
        router.push({ name: "index" });
      } catch (error) {
        if (error && error.code == 401) {
          toast.warning(`${error.message}`);
          return;
        }

        errors.sigin = error;
        isLoading.value = false;
        return;
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
        errors.resgister = error;
      }
    };

    const checkUserResgister = async (data) => {
      try {
        const response = await checkUserResgisterService(data);

        success.register = 1;
      } catch (error) {
        toast.error("Đăng ký thất bại, vui lòng thử lại");
        success.register = 0;
        errors.resgister = error;
      }
    };

    const logout = async () => {
      try {
        await logoutService();

        token.value = "";
        user.value = {};
        isLogin.value = false;
        isLoading.value = false;
        rankByUser.value = {};
        vat.value = {};

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

        resetPasswordCookie.value = null;
        navigateTo("/login");
      } catch (error) {
        console.log(error);

        if (error && error.errors) {
          errors.password = error.errors.password;
          errors.password_confirm = error.errors.password_confirm;
        }
      }
    };

    const changePassword = async (data) => {
      try {
        const response = await changePasswordService(data);

        toast.success("Đổi mật khẩu thành công");

        return true;
      } catch (error) {
        console.log(error);

        if (error && error.error && error.error.message) {
          toast.error(error.error.message);
          return;
        }

        if (error && error.errors) {
          errors.password_old = error.errors.password_old;
          errors.password = error.errors.password;
          return;
        }
      }
    };

    const verifyEmail = async (data) => {
      try {
        const response = await verifyEmailService(data);
      } catch (error) {
        console.log(error);
      }
    };

    const confirmEmail = async (data) => {
      try {
        const response = await confirmVerifyEmailService(data);
        if (response.status) {
          token.value = response.data.token;
          user.value = response.data.user;
          isLogin.value = true;
        }

        toast.success("Đăng ký thành công");
        router.push({ name: "index" });
      } catch (error) {
        console.log(error);

        if (error && error.error) {
          toast.error(error.error);
          return;
        }

        toast.error("Có lỗi xảy ra");
      }
    };

    return {
      user,
      vat,
      token,
      errors,
      success,
      isLogin,
      login,
      register,
      checkUserResgister,
      logout,
      isLoading,
      sendOtp,
      verifyOtp,
      resetPassword,
      changePassword,
      verifyEmail,
      confirmEmail,
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
