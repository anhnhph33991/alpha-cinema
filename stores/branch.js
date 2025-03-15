
import { defineStore } from "pinia";
import { listBranchService } from "~/services/branch";

export const useBranchStore = defineStore("branch", () => {
  const branchs = ref([]);

  const listBranch = async () => {
    try {
      const response = await listBranchService();
      branchs.value = response.data; // Đảm bảo lấy đúng mảng chi nhánh
      console.log("Dữ liệu chi nhánh:", branchs.value);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách chi nhánh:", error);
    }
  };

  return { branchs, listBranch };
});
