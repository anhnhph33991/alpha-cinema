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

  const convertOptionBranch = () => {
    return branchs.value
      .filter(
        (branch) => Array.isArray(branch.cinemas) && branch.cinemas.length > 0
      )
      .map((branch) => ({
        value: branch.id,
        label: branch.name,
      }));
  };

  const convertOptionCinema = (branchId) => {
    const branch = branchs.value.find((branch) => branch.id === branchId);
    return (
      branch?.cinemas?.map((cinema) => ({
        value: cinema.id,
        label: cinema.name,
      })) || []
    );
  };

  return { branchs, listBranch, convertOptionBranch, convertOptionCinema };
});
