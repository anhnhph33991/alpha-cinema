import { getRankService } from "~/services/auth";

export const useRankStore = defineStore(
  "rank",
  () => {
    const rankByUser = ref({});

    const getRank = async () => {
      try {
        const response = await getRankService();
        rankByUser.value = response.data.rank;
        console.log("rank");

        console.log(response.data.rank);
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
