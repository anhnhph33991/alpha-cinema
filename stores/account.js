import { defineStore } from "pinia";
import { fetchVoucher, updateProfileService } from "~/services/account";
import { toast } from "vue-sonner";
export const accountStore = defineStore("account", () => {
  const vouchers = ref([]);
  const errors = reactive({});

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
      console.log(response);

      useAuthStore().user = response.data.user;

      toast.success("Thay đổi thông tin thành công");
    } catch (error) {
      console.log(error);
      if (error && error.errors) {
        console.log(error);
        errors.name = error.errors.name;
        errors.phone = error.errors.phone;
        errors.birthday = error.errors.birthday;
        errors.gender = error.errors.gender;
        errors.address = error.errors.address;
        errors.avatar = error.errors.avatar;
      }
    }
  };

  const clearFieldError = (filed) => {
    if (errors[filed]) {
      errors[filed] = null;
    }
  };

  return { vouchers, errors, loadVoucher, useUpdateProfile, clearFieldError };
});
