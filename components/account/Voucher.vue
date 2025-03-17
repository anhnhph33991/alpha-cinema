<template>
  <div class="container mt-4">
    <!-- VOUCHER CỦA TÔI -->
    <h4 class="text-custom">VOUCHER CỦA TÔI</h4>
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead class="table-light">
          <tr>
            <th>MÃ VOUCHER</th>
            <th>NỘI DUNG VOUCHER</th>
            <th>LOẠI VOUCHER</th>
            <th>NGÀY HẾT HẠN</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="vc in dataVocher" :key="vc.voucher.id">
            <td>{{ vc.voucher.code }}</td>
            <td>{{ vc.voucher.title }}</td>
            <td>{{ vc.voucher.description || 'Không có mô tả' }}</td>
            <td>{{ vc.voucher.start_date_time || 'Không có ngày hết hạn' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { accountStore } from "@/stores/account";
import { useAuthStore } from "@/stores/auth";

const voucherStore = accountStore();
const authStore = useAuthStore();
const dataVocher = ref([]);

onMounted(async () => {
  if (authStore.isLogin) {
    await voucherStore.loadVoucher(); // Đợi API load xong
    console.log("Voucher vue", voucherStore.vouchers); // Kiểm tra dữ liệu trả về
    dataVocher.value = voucherStore.vouchers.filter(v => v.voucher); // Chỉ lấy mục có voucher
  }
});
</script>

<style>
.text-custom {
  color: #b58530;
}
</style>
