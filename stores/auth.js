import { toast } from "vue-sonner";
import { loginService, logoutService, registerService } from "~/services/auth";

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

    /**
     * Xử lý login
     */
    const login = async (data) => {
      isLoading.value = true;
      try {
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

    return { user, token, isLogin, login, register, logout, isLoading };
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.cookies({
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      }),
    },
  }
);
