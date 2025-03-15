import { fetchFoodComboService, fetchFoodsService } from "~/services/food";

export const useFoodStore = defineStore("food", () => {
  const foods = ref([]);
  const foodCombo = ref([]);

  const fetchFoods = async () => {
    try {
      const response = await fetchFoodsService();

      foods.value = response.data;

      console.log("food");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFoodCombo = async () => {
    try {
      const response = await fetchFoodComboService();

      foodCombo.value = response.data;

      console.log("food combo");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return { foods, foodCombo, fetchFoods, fetchFoodCombo };
});
