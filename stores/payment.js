import { paymentMomoService } from "~/services/payment";

export const usePaymentStore = defineStore("payment", () => {
  const paymentMomo = async (data) => {
    try {
      const response = await paymentMomoService(data);

      console.log(response);

      navigateTo(response.url, { external: true });
    } catch (error) {
      console.log(error);
    }
  };

  return { paymentMomo };
});
