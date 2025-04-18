import { fetchVouchersService } from "~/services/voucher";

export const useVoucherStore = defineStore("voucher", () => {
  const vouchers = ref([]);

  const fetchVouchers = async () => {
    try {
      /**
       * Voucher có
       *
       * inactive // voucher ngừng hoạt động
       * upcoming // vourhcer chưa có hiệu lực
       * expired // voucher đã hết hạn
       * active // voucher đang có hiệu lực
       */
      const response = await fetchVouchersService();

      if (response.vouchers) {
        // vouchers.value = response.vouchers;
        vouchers.value = response.vouchers.filter(
          (voucher) => voucher.status === "active"
        );
      }

      console.log("all voucher");
      // console.log(response);

      console.log(vouchers.value);
    } catch (error) {
      console.log(error);
    }
  };

  return { vouchers, fetchVouchers };
});
