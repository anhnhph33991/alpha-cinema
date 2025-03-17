<template>
  <div class="container mt-4">
    <h4 class="text-custom fw-bold">TỔNG QUAN</h4>
    <div class="mb-4">
      <p>Điểm đã tích lũy <span class="fw-bold">{{ point?.user?.point || 0 }} điểm</span></p>
      <p>Điểm đã sử dụng <span class="fw-bold">{{ totalUsedPoints }} điểm</span></p>
      <p>Điểm hiện có <span class="fw-bold">{{ remainingPoints }} điểm</span></p>
    </div>

    <h4 class="text-custom fw-bold">LỊCH SỬ ĐIỂM</h4>
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead class="table-light">
          <tr>
            <th>THỜI GIAN</th>
            <th>SỐ ĐIỂM</th>
            <th>NỘI DUNG SỬ DỤNG</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(history, index) in historyPoints" :key="index">
            <td>{{ formatDate(history.created_at) }}</td>
            <td :class="{'text-success fw-bold': history.point > 0, 'text-danger fw-bold': history.point < 0}">
              {{ history.point > 0 ? `+ ${history.point}` : history.point }}
            </td>
            <td>{{ history.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

  <script setup>
  import { onMounted} from "vue";
import { useAuthStore } from "@/stores/auth";
import {fetchPoint} from "@/services/account.js";

const authStore = useAuthStore();
const point = ref(null)
onMounted(async () => {
  if (authStore.isLogin) {
    const data = await fetchPoint();
    console.log("📌 API Response:", data); // Kiểm tra dữ liệu
    if (data) {
      point.value = data;
      console.log("gias trij veef :",point.value);
      
    }
  
  }
  
});

// Lấy danh sách lịch sử điểm từ API
const historyPoints = computed(() => {
  return point.value?.["history-point"] || []; // Mảng lịch sử điểm
});

// Tính tổng điểm đã sử dụng
const totalUsedPoints = computed(() => {
  return historyPoints.value.reduce((sum, history) => sum + history.point, 0);
});

// Tính điểm hiện có
const remainingPoints = computed(() => {
  return (point.value?.user?.point || 0) - totalUsedPoints.value;
});

// Định dạng ngày từ `created_at`
const formatDate = (date) => {
  if (!date) return "N/A";
  const d = new Date(date);
  return d.toLocaleDateString("vi-VN") + " " + d.toLocaleTimeString("vi-VN");
};
  </script>
  
  <style>

  .text-custom {
  color: #043C4D;
  }
  </style>
  