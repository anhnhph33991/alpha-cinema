export const createTicketService = async (data) => {
  const { $axios } = useNuxtApp();

  try {
    const response = await $axios.post(`/v1/tickets`, data);

    if (!response) {
      throw new Error("Invalid response");
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export async function fetchTicketHistory() {
    const { $axios } = useNuxtApp();
    try {
        const response = await $axios.get(`/v1/ticket-by-user`);
        console.log('ticket',response.data);
        return response.data;
        
    } catch (error) {
        console.error("Lỗi khi lấy lịch sử vé:", error);
        return [];
    }
}
