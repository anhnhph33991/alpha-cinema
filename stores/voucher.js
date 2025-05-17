import { toast } from "vue-sonner";
import { fetchVouchersService } from "~/services/voucher";

export const useVoucherStore = defineStore("voucher", () => {
  const vouchers = ref([]);

  const fetchVouchers = async () => {
    try {
      const response = await fetchVouchersService();

      if (response.vouchers) {
        vouchers.value = response.vouchers.filter(
          (voucher) => voucher.status === "active"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const listenToVoucherBroadcast = (userId) => {
    const echo = useEcho();
    const channel = echo.channel("voucher");

    channel.listen("RealTimeVouCherEvent", (data) => {
      if (data.user_id == userId) {
        if (process.client) {
          const audio = new Audio("/audio/tingting.mp3");
          audio.play().catch((error) => {
            console.error("Error playing sound:", error);
          });
        }

        toast.success(`Bạn vừa nhận được voucher: ${data.title}`);
      }
    });
  };

  return { vouchers, fetchVouchers, listenToVoucherBroadcast };
});
