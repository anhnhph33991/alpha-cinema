export const fetchFoodsService = async () => {
  const { $axios } = useNuxtApp();
  try {
    const response = await $axios.get("/v1/foods");

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchFoodComboService = async () => {
  const { $axios } = useNuxtApp();
  try {
    const response = await $axios.get("/v1/list_combo");

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};
