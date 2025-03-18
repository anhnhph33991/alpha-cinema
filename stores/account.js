import { defineStore } from "pinia";
import {  fetchVoucher } from "~/services/account";

export const accountStore = defineStore("account", () => {
 
  const vouchers = ref([]);

  // Hàm lấy lịch sử vé
 

  const loadVoucher = async () => {
    try {
      const data = await fetchVoucher();
      vouchers.value = data; // Set giá trị là một mảng

      console.log("Dữ liệu vouchers:", vouchers.value);
    } catch (error) {
      console.error("Lỗi khi tải voucher:", error);
    }
  };

  return {  vouchers,  loadVoucher };
});


