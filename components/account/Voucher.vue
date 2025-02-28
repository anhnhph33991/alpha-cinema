<!-- ~/components/account/Voucher.vue -->
<template>
    <div class="container py-5">
        <div class="card shadow-lg border-0 w-100" style="max-width: 1000px; margin: 0 auto;">
            <div class="card-body p-4">
                <!-- Phần Voucher Của Tôi -->
                <div class="mb-4">
                    <h4 class="text-primary mb-3">VOUCHER CỦA TÔI</h4>
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead class="table-primary">
                                <tr>
                                    <th>Mã Voucher</th>
                                    <th>Nội dung Voucher</th>
                                    <th>Lợi Voucher</th>
                                    <th>Ngày Hết Hạn</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="voucher in activeVouchers" :key="voucher.code">
                                    <td>{{ voucher.code }}</td>
                                    <td>{{ voucher.content }}</td>
                                    <td>{{ voucher.benefit }}</td>
                                    <td>{{ voucher.expiration }}</td>
                                    <td>
                                        <button class="btn btn-sm btn-primary">Sử dụng</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Phần Lịch Sử Voucher -->
                <div>
                    <h4 class="text-primary mb-3">LỊCH SỬ VOUCHER</h4>
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead class="table-primary">
                                <tr>
                                    <th>Thời gian</th>
                                    <th>Mã Voucher</th>
                                    <th>Nội dung Voucher</th>
                                    <th>Trạng Thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="history in voucherHistory" :key="history.time">
                                    <td>{{ history.time }}</td>
                                    <td>{{ history.code }}</td>
                                    <td>{{ history.content }}</td>
                                    <td>{{ history.status }}</td>
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

// Props để nhận dữ liệu từ parent (nếu cần)
const props = defineProps(['user']);

// Dữ liệu mẫu cho Voucher Của Tôi
const activeVouchers = [
    { code: 'VCH001', content: 'Giảm 20% vé xem phim', benefit: '20.000 đ', expiration: '31/12/2025' },
    { code: 'VCH002', content: 'Miễn phí bắp rang', benefit: '1 phần bắp', expiration: '15/11/2025' },
];

// Dữ liệu mẫu cho Lịch Sử Voucher
const voucherHistory = [
    { time: '20/11/2025 14:30', code: 'VCH001', content: 'Giảm 20% vé xem phim', status: 'Đã sử dụng' },
    { time: '10/10/2025 09:15', code: 'VCH002', content: 'Miễn phí bắp rang', status: 'Hết hạn' },
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

.btn-primary {
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
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
