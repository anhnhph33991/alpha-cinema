export const paymentMomoService = async (data) => {
  const { $axios } = useNuxtApp();

  try {
    const response = await $axios.post(`/v1/payment`, data);

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};
