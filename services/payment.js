export const paymentMomoService = async (
  payment,
  data,
  seatIds,
  point,
  code_voucher
) => {
  const { $axios } = useNuxtApp();

  try {
    const response = await $axios.post(`/v1/${payment}/payment`, {
      ticket: data,
      seat_id: seatIds,
      point: point,
      code_voucher: code_voucher,
    });

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};
