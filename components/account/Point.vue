<template>
  <div class="container mt-4">
    <h4 class="text-custom fw-bold">TỔNG QUAN</h4>
    <div class="mb-4">
      <p>
        Điểm đã tích lũy :
        <span v-if="point" class="fw-bold"
          >{{ totalPointsUsed + point.user.point }} điểm</span
        >
      </p>
      <p>
        Điểm đã sử dụng :
        <span class="fw-bold">{{ totalPointsUsed }} điểm</span>
      </p>
      <p>
        Điểm hiện có :
        <span v-if="point" class="fw-bold">{{ point.user.point }} điểm</span>
      </p>
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
          <tr v-for="(item, index) in pointHistory" :key="index">
            <td>{{new Date(item.date).toLocaleString("vi-VN") }}</td>
            <td>{{ item.description }}</td>
            <td :class="item.points < 0 ? 'text-danger' : 'text-success'">
              {{ item.points }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

  <script setup>
import { ref, computed, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";
import { fetchRank, fetchPointHistory } from "@/services/account.js";
import { useTicketStore } from "@/stores/ticket";

const ticketStore = useTicketStore();
const authStore = useAuthStore();
const point = ref(null);
const pointHistory = ref([])
const totalPointsUsed = computed(() => {
  return ticketStore.tickets.reduce(
    (total, ticket) => total + Number(ticket.point_use || 0),
    0
  );
});

onMounted(async () => {
  if (authStore.isLogin) {
    const data = await fetchRank();
    await ticketStore.loadTickets(); // Chờ load dữ liệu trước khi tính toán
    pointHistory.value = await fetchPointHistory();
    console.log(" API Response fetchRank:", data);
    // console.log("Dữ liệu tickets:", ticketStore.tickets); // Kiểm tra dữ liệu ticketStore

    if (data) {
      point.value = data;
      // console.log("Giá trị rank:", point.value);
      // console.log("Tổng điểm sử dụng:", totalPointsUsed.value);
    }
  }
});
</script>
  
  <style>
.text-custom {
  color: #043c4d;
}
</style>
  