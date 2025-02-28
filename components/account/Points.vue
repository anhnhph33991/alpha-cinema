<!-- ~/components/account/CartMember.vue -->
<template>
    <div class="container py-5">
        <div class="card shadow-lg border-0 w-100" style="max-width: 1000px; margin: 0 auto;">
            <div class="card-body p-4">
                <!-- Phần Tổng Quan -->
                <div class="mb-4">
                    <h4 class="text-primary mb-3">TỔNG QUAN</h4>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <strong>Điểm đã tích lũy:</strong> {{ user?.accumulatedPoints || '26.700 điểm' }}
                        </div>
                        <div class="col-md-6 mb-3">
                            <strong>Điểm đã sử dụng:</strong> {{ user?.usedPoints || '23.700 điểm' }}
                        </div>
                        <div class="col-md-6 mb-3">
                            <strong>Điểm hiện có:</strong> {{ user?.availablePoints || '3.000 điểm' }}
                        </div>
                        <div class="col-md-6 mb-3">
                            <strong>Điểm sắp hết hạn:</strong> {{ user?.expiringPoints || '3.000 điểm' }} (hết hạn vào
                            {{ user?.expirationDate || '08/04/2025' }})
                        </div>
                    </div>
                </div>

                <!-- Phần Lịch Sử Điểm -->
                <div>
                    <h4 class="text-primary mb-3">LỊCH SỬ ĐIỂM</h4>
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead class="table-primary">
                                <tr>
                                    <th>Thời gian</th>
                                    <th>Số điểm</th>
                                    <th>Nội dung sử dụng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="entry in pointHistory" :key="entry.time">
                                    <td>{{ entry.time }}</td>
                                    <td>{{ entry.points }}</td>
                                    <td>{{ entry.usage }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Props để nhận dữ liệu từ parent
const props = defineProps(['user']);

// Dữ liệu lịch sử điểm (có thể lấy từ user hoặc hardcode)
const pointHistory = [
    { time: '21/11/2025 11:29', points: '+3.000', usage: 'Tích điểm' },
    { time: '21/11/2024 21:13', points: '+3.000', usage: 'Tích điểm' },
    { time: '27/07/2024 18:43', points: '+3.600', usage: 'Tích điểm' },
    { time: '22/06/2024 15:52', points: '+3.000', usage: 'Tích điểm' },
    { time: '04/05/2024 08:15', points: '+5.100', usage: 'Tích điểm' },
    { time: '14/04/2024 22:11', points: '+3.000', usage: 'Tích điểm' },
];
</script>

<style scoped>
/* Tùy chỉnh Bootstrap */
.table {
    font-size: 0.9rem;
}

.table-primary {
    background-color: #007bff;
    color: white;
}

.table-primary th {
    border-color: #007bff;
}

.table-bordered {
    border: 1px solid #dee2e6;
}

.table-hover tbody tr:hover {
    background-color: #f8f9fa;
}

/* Responsive */
@media (max-width: 768px) {
    .table {
        font-size: 0.8rem;
    }

    .card {
        margin: 0 1rem;
    }
}
</style>
