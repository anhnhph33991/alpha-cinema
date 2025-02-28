<!-- ~/components/account/CartMember.vue -->
<template>
    <div class="container py-5">
        <div class="card shadow-lg border-0 w-100" style="max-width: 1000px; margin: 0 auto;">
            <div class="card-body p-4">
                <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead class="table-primary">
                            <tr>
                                <th>Số thẻ</th>
                                <th>Hạng thẻ</th>
                                <th>Ngày kích hoạt</th>
                                <th>Tổng chi tiêu</th>
                                <th>Điểm tích lũy</th>
                                <th>Điểm đã tính</th>
                                <th>Điểm khả dụng</th>
                                <th>Điểm sắp hết hạn</th>
                                <th>Ngày hết hạn</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ user?.cardNumber || '9002000002084078 (Đang dùng)' }}</td>
                                <td>{{ user?.cardLevel || 'Khách hàng STANDARD' }}</td>
                                <td>{{ user?.activationDate || '06/07/2023' }}</td>
                                <td>{{ user?.totalSpending || '890.000 đ' }}</td>
                                <td>{{ user?.accumulatedPoints || '26.700' }}</td>
                                <td>{{ user?.usedPoints || '23.700' }}</td>
                                <td>{{ user?.availablePoints || '3.000' }}</td>
                                <td>{{ user?.expiringPoints || '3.000' }}</td>
                                <td>{{ user?.expirationDate || '08/04/2025' }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="mt-4">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span>Bạn cần tích lũy thêm 2.110.000 đ để nâng hạng Khách hàng VIP</span>
                        <span>3.000.000</span>
                    </div>
                    <div class="progress" style="height: 20px;">
                        <div class="progress-bar bg-info" role="progressbar" :style="{ width: '30%' }"
                            aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                            30%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['user']); // Nhận prop user từ parent
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

.progress {
    border-radius: 10px;
    background-color: #e9ecef;
}

.progress-bar {
    border-radius: 10px;
    transition: width 0.3s ease;
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
