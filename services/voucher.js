export const fetchVouchersService = async () => {
  const { $axios } = useNuxtApp();
  try {
    const response = await $axios.get("/vouchers");

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};
