import { getRankService } from "~/services/auth";
import { useAuthStore } from "@/stores/auth";

export const useRankStore = defineStore(
  "rank",
  () => {
    const rankByUser = ref({});

    const getRank = async () => {
      try {
        const response = await getRankService();

        rankByUser.value = response.rank;
        useAuthStore().user.point = response.user.point;
        useAuthStore().user.total_amount = response.user.total_amount;
      } catch (error) {
        console.log(error);
      }
    };

    return { rankByUser, getRank };
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.cookies({
        expires: new Date(Date.now() + 10 * 60 * 1000),
      }),
    },
  }
);
