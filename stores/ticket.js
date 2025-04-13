import { defineStore } from "pinia";
import {
  createTicketService,
  fetchTicketHistory,
  findByCodeService,
} from "~/services/ticket";

export const useTicketStore = defineStore("ticket", () => {
  const tickets = ref([]);
  const ticket = ref({});

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

  const findByCode = async (code) => {
    try {
      const response = await findByCodeService(code);
      ticket.value = response.data.ticket;
      console.log(ticket.value);
    } catch (error) {
      console.log("Lỗi khi tải lịch sử vé:", error);
    }
  };

  return { tickets, ticket, createTicket, loadTickets, findByCode };
});
