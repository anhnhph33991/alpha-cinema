export const fetchSettingService = async () => {
    const { $axios } = useNuxtApp();
  
    try {
      const response = await $axios.get(`/v1/settings`);
  
      if (!response) {
        throw new Error("Invalid response");
      }
  
      return response.data; // Chỉ trả về phần "data"
    } catch (error) {
      throw error;
    }
  };
  