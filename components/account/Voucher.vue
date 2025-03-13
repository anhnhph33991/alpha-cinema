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
          <tr>
            <td>ABC123</td>
            <td>Giảm 10%</td>
            <td>Khuyến mãi</td>
            <td>2025-12-31</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- LỊCH SỬ VOUCHER -->
    <h4 class="text-custom mt-4">LỊCH SỬ VOUCHER</h4>
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead class="table-light">
          <tr>
            <th>THỜI GIAN</th>
            <th>MÃ VOUCHER</th>
            <th>NỘI DUNG VOUCHER</th>
            <th>TRẠNG THÁI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2025-01-01</td>
            <td>XYZ789</td>
            <td>Giảm 20%</td>
            <td><span class="badge bg-success">Đã dùng</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


onMounted(() => {
  // console.log("MemberCard component đã được mount!");
});
</script>

<style>

.text-custom {
color: #b58530 ;
}
</style>