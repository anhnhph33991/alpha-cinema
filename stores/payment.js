import { paymentMomoService } from "~/services/payment";

export const usePaymentStore = defineStore("payment", () => {
  const paymentMomo = async (payment, data, seatIds, point, code_voucher) => {
    try {
      const response = await paymentMomoService(
        payment,
        data,
        seatIds,
        point,
        code_voucher
      );

      navigateTo(response.url, { external: true });
    } catch (error) {
      console.log(error);
    }
  };

  return { paymentMomo };
});
