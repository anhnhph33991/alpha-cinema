import { paymentMomoService } from "~/services/payment";

export const usePaymentStore = defineStore("payment", () => {
  const paymentMomo = async (payment, data, seatIds) => {
    try {
      // console.log(data);
      // console.log(seatIds);

      const response = await paymentMomoService(payment, data, seatIds);

      console.log(response);

      navigateTo(response.url, { external: true });
    } catch (error) {
      console.log(error);
    }
  };

  return { paymentMomo };
});
