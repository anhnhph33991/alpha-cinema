import { listBranchService } from "~/services/branch";

export const useBranchStore = defineStore("branch", () => {
  const branchs = ref([]);
  const branch = ref({});
  const listBranch = async () => {
    try {
      const response = await listBranchService();
      branchs.value = response;
    //   console.log(response);
    } catch (error) {
      toast.error("lỗi");
    }
  };
return { branchs, branch , listBranch};
});
