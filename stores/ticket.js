import { defineStore } from "pinia";
import { createTicketService, fetchTicketHistory } from "~/services/ticket";

export const useTicketStore = defineStore("ticket", () => {
  const tickets = ref([]);

  // Hàm tạo vé
  const createTicket = async (data) => {
    try {
      const response = await createTicketService(data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // Hàm lấy lịch sử vé
  const loadTickets = async () => {
    try {
      tickets.value = await fetchTicketHistory();

      console.log(tickets.value);
      

    } catch (error) {
      console.log("Lỗi khi tải lịch sử vé:", error);
    }
  };

  return { tickets, createTicket, loadTickets };
});


