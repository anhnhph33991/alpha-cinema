<script setup>
import { onMounted, ref, computed } from "vue";
import { useAuthStore } from "@/stores/auth";
import { fetchRank } from "@/services/account.js";
import { useTicketStore } from "@/stores/ticket";

const authStore = useAuthStore();
const ticketStore = useTicketStore();

const account = ref(null);
const ranks = ref([]);
const isLoading = ref(true);
// Tính phần trăm tổng tiến trình theo tất cả cấp bậc
const progressPercentFull = computed(() => {
  if (!account.value || !ranks.value.length) return 0;
  const spent = account.value.user.total_amount;
  const maxSpent = ranks.value[ranks.value.length - 1].total_spent;
  return Math.min((spent / maxSpent) * 100, 100);
});

// Tính tổng điểm đã tiêu
const totalPointsUsed = computed(() => {
  return ticketStore.tickets.reduce((total, ticket) => {
    return total + Number(ticket.point_use || 0);
  }, 0);
});

// Lấy icon tương ứng với rank
function getRankIcon(rankName) {
  switch (rankName.toLowerCase()) {
    case "member":
      return "👤";
    case "gold":
      return "🥇";
    case "platinum":
      return "🥈";
    case "diamond":
      return "💎";
    default:
      return "🏆";
  }
}

// onMounted(async () => {
//   if (authStore.isLogin) {
//     Promise.all([fetchRank(), ticketStore.loadTickets()])
//       .then(([data]) => {
//         account.value = data;
//         ranks.value = data.next_rank;
//         console.log("📌 Rank & Tickets loaded:", data);
//       })
//       .catch((error) => {
//         console.error("❌ Lỗi khi lấy dữ liệu:", error);
//       });

//     if (data) {
//       account.value = data;
//       ranks.value = data.next_rank;
//     }
//   }
// });
onMounted(() => {
  if (authStore.isLogin) {
    isLoading.value = true;

    Promise.all([fetchRank(), ticketStore.loadTickets()])
      .then(([data]) => {
        account.value = data;
        ranks.value = data.next_rank;
        console.log("📌 Rank & Tickets loaded:", data);
      })
      .catch((error) => {
        console.error("❌ Lỗi khi lấy dữ liệu:", error);
      })
      .finally(() => {
        isLoading.value = false;
      });
  }
});

</script>

<template>
  <div v-if="!isLoading" class="container-wrapper">
    <div class="container al-bg-white p-5">
      <div class="title-row mb-4">
        <h4 class="title">Thông Tin Thẻ Thành Viên</h4>
        <p class="total-progress">
          Đã tích lũy tổng:
          <strong style="color: green;">{{ Number(account?.user.total_amount).toLocaleString() }} VNĐ</strong>
          <strong style="color: blue;"> ({{ Math.round(progressPercentFull) }}%)</strong>
        </p>
      </div>

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
            <td>{{ account.user.total_amount.toLocaleString() }} VNĐ</td>
            <td>{{ totalPointsUsed + account.user.point }} Điểm</td>
            <td>{{ totalPointsUsed }} Điểm</td>
            <td>{{ account.user.point }} Điểm</td>
          </tr>
        </tbody>
      </table>

      <div class="progress-container text-center mt-4" v-if="ranks.length">
        <a-progress :stroke-color="{
          '0%': '#108ee9',
          '100%': '#87d068',
        }" :percent="progressPercentFull" :format="() => ''" />

        <div class="progress-rank-marks">
          <div v-for="(rank, index) in ranks" :key="rank.id" class="progress-rank-mark"
            :style="{ left: (rank.total_spent / ranks[ranks.length - 1].total_spent * 100) + '%' }">
            <div class="rank-icon" :class="{ active: account.rank.id === rank.id }">
              {{ getRankIcon(rank.name) }}
            </div>
            <div class="rank-label">{{ rank.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="loading-wrapper">
    <a-spin />
  </div>

</template>

<style scoped>
.loading-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* Full screen */
}

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
  background-color: #ffffff;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

p {
  font-size: 16px;
  font-weight: bold;
}

/* Tiêu đề và tổng tiến trình trên 1 hàng */
.title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

.total-progress {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  text-align: right;
}

/* Thanh tiến trình và rank */
.progress-container {
  width: 100%;
  margin-top: 20px;
}

.progress-rank-marks {
  position: relative;
  width: 100%;
  margin-top: 10px;
  height: 40px;
}

.progress-rank-mark {
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  text-align: center;
}

.rank-icon {
  font-size: 20px;
  color: #ccc;
  transition: color 0.3s, transform 0.3s;
}

.rank-icon.active {
  color: #ffc107;
  transform: scale(1.4);
}

.rank-label {
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
}
</style>
