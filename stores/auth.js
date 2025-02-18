import { toast } from "vue-sonner";

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

    /**
     * Xử lý login
     */
    const login = (data) => {
      try {
        toast.success("Đăng nhập thành công");
      } catch (error) {
        toast.error("Đăng nhập thất bại");
      }
    };

    return { user, token, isLogin, login };
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.cookies({
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      }),
    },
  }
);
