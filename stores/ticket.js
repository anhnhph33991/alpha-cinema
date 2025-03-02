import { createTicketService } from "~/services/ticket";

export const useTicketStore = defineStore("ticket", () => {
  const createTicket = async (data) => {
    try {
      const response = await createTicketService(data);

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return { createTicket };
});
