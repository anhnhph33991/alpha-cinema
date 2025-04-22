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

        console.log(response);

        // return;
        isLoading.value = true;

        toast.success("Đăng nhập thành công");
        router.push({ name: "index" });
      } catch (error) {
        errors.sigin = error;
        console.log(errors);
        isLoading.value = false;
        // toast.error("Đăng nhập thất bại");
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
        console.log(errors.resgister);
        console.log(errors.resgister.errors.email[0]);
      }
    };

    const checkUserResgister = async (data) => {
      try {
        const response = await checkUserResgisterService(data);

        // if (response.status) {
        //   token.value = response.data.token;
        //   user.value = response.data.user;
        //   isLogin.value = true;
        // }
        success.register = 1;
        console.log(success.register);

        // toast.success("Đăng ký thành công");
        // router.push({ name: "index" });
      } catch (error) {
        toast.error("Đăng ký thất bại, vui lòng thử lại");
        success.register = 0;
        errors.resgister = error;
        console.log(errors.resgister);
        // console.log(errors.resgister.errors.email[0]);
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
        // toast.error("Có lỗi xảy ra");
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

        if (error && error.errors) {
          errors.password = error.errors.password;
          errors.password_confirm = error.errors.password_confirm;
        }
      }
    };

    const changePassword = async (data) => {
      try {
        const response = await changePasswordService(data);

        console.log(response);
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
          console.log(errors);
          return;
        }
      }
    };

    const verifyEmail = async (data) => {
      try {
        const response = await verifyEmailService(data);

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    const confirmEmail = async (data) => {
      try {
        const response = await confirmVerifyEmailService(data);
        // console.log(response);
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
