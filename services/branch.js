export const listBranchService = async () => {
    const { $axios } = useNuxtApp();

    try {
      const response = await $axios.get("/v1/branchs");
  
      if (!response) {
        throw new Error("Invalid response");
      }

      return response;
    } catch (error) {
      throw error;
    }
}