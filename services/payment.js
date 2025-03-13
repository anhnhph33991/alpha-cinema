export const paymentMomoService = async (payment, data, seatIds) => {
  const { $axios } = useNuxtApp();

  try {
    const response = await $axios.post(`/v1/${payment}/payment`, {
      ticket: data,
      seat_id: seatIds,
    });

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};
