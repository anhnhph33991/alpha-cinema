
<script setup>
import { onMounted, ref, computed } from "vue";
import { useAuthStore } from "@/stores/auth";
import {fetchRank } from "@/services/account.js";
import { useTicketStore } from "@/stores/ticket";


const authStore = useAuthStore();
const ticketStore = useTicketStore();
const account = ref(null);
const nextRank = ref(null);
const progressPercentage = computed(() => {
  if (!account.value || !nextRank.value) return 0;
  const currentAmount = account.value.user.total_amount;
  const targetAmount = nextRank.value.total_spent;
  return Math.min((currentAmount / targetAmount) * 100, 100);
});
const totalPointsUsed = computed(() => {
  return ticketStore.tickets.reduce(
    (total, ticket) => total + Number(ticket.point_use || 0),
    0
  );
});
onMounted(async () => {
  if (authStore.isLogin) {
    const data = await fetchRank();
    await ticketStore.loadTickets(); 
    console.log("📌 API Response:", data); // Kiểm tra dữ liệu

    if (data) {
      account.value = data;
      // point.value = data;
      nextRank.value = data.next_rank;
    }
  }
});
</script>


<template>
  <div class="container-wrapper">
    <div class="container al-bg-white p-5">
      <h3 class="text-center mb-4 title">Thông Tin Thẻ Thành Viên</h3>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Hạng Thẻ</th>
            <th>Ngày Kích Hoạt</th>
            <th>Tổng Chi Tiêu</th>
            <th>Điểm Tích Lũy</th>
            <th>Điểm Đã Tiêu</th>
            <th>Điểm Hiện có</th>
          </tr>
        </thead>
        <tbody v-if="account">
          <tr>
            <td>{{ account.rank.name }}</td>
            <td>{{ new Date(account.user.created_at).toLocaleString("vi-VN") }}</td> 

            <td>{{ account.user.total_amount.toLocaleString() }} đ</td>
            <td>{{ totalPointsUsed + account.user.point }} Điểm </td>
            <td>{{ totalPointsUsed }} Điểm </td>
            <td>{{ account.user.point }} Điểm </td>
          </tr>
        </tbody>
      </table>

      <div class="progress-container text-center mt-4" v-if="nextRank">
        <p>
          Bạn cần tích lũy thêm
          <strong>
            {{
              (nextRank.total_spent - account.user.total_amount).toLocaleString()
            }} VND
          </strong>
          để nâng hạng <strong>{{ nextRank.name }}</strong>
        </p>
        <div class="progress-bar-wrapper">
          <div class="progress-bar" :style="{ width: progressPercentage + '%' }"></div>
        </div>
        <div class="progress-mark-container">
          <div class="progress-mark start-mark">
            {{ account.rank.total_spent.toLocaleString() }} đ
          </div>
          <div class="progress-mark end-mark">
            {{ nextRank.total_spent.toLocaleString() }} đ
          </div>
        </div>
        <p>
          <strong>{{ Math.round(progressPercentage) }}%</strong> đã tích lũy
        </p>
      </div>
    </div>
  </div>
</template>
  

  
  <style scoped>
.container-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
}

.container {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.title {
  color: #043c4d;
}

table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  text-align: center;
}

th {
  background-color: #043c4d;
  font-weight: bold;
  color: #fff;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

p {
  font-size: 16px;
  font-weight: bold;
  color: #d9534f;
}

/* CSS cho thanh tiến trình */
.progress-container {
  width: 100%;
  margin-top: 20px;
}

.progress-bar-wrapper {
  width: 100%;
  background-color: #f1f1f1;
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
  position: relative;
}

.progress-bar {
  height: 100%;
  background-color: #28a745;
  border-radius: 10px;
}

.progress-mark-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 5px;
  width: 100%;
}

.progress-mark {
  font-size: 12px;
  font-weight: bold;
  color: #000;
  text-align: center;
  width: 50%;
}

.start-mark {
  text-align: left;
  margin-left: 0;
}

.end-mark {
  text-align: right;
  margin-right: 0;
}
</style>
  