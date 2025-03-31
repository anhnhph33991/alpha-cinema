import { defineStore } from "pinia";
import { fetchVoucher, updateProfileService } from "~/services/account";
import { toast } from "vue-sonner";
export const accountStore = defineStore("account", () => {

  const vouchers = ref([]);
  // const userProfile = ref({});
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


  const useUpdateProfile = async (id, data) => {

    try {
      const response = await updateProfileService(id, data);

      toast.success("Thay đổi thông tin thành công");

    } catch (error) {

      console.error("Lỗi trong store updateUserProfile:", error);

      throw error;

    }
  }

  return { vouchers, loadVoucher, useUpdateProfile };
});

