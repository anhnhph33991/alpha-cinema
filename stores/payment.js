import { paymentMomoService } from "~/services/payment";

export const usePaymentStore = defineStore("payment", () => {
  const paymentMomo = async (data, seatIds) => {
    try {
      // console.log(data);
      // console.log(seatIds);

      const response = await paymentMomoService(data, seatIds);

      console.log(response);

      navigateTo(response.url, { external: true });
    } catch (error) {
      console.log(error);
    }
  };

  return { paymentMomo };
});
