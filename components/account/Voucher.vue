<template>
    <div class="container-wrapper">
        <div class="container">
            <h4 class="text-custom mb-4">🎟️ VOUCHER CỦA TÔI</h4>

            <!-- Loading -->
            <div v-if="isLoading" class="skeleton-table">
                <div v-for="n in 4" :key="n" class="skeleton-row"></div>
            </div>

            <!-- Không có voucher -->
            <div v-else-if="!dataVoucher.length" class="text-center py-5">
                <i class="bi bi-ticket fs-1 mb-3" style="color: #b58530;"></i>
                <p>Hiện tại bạn chưa có voucher nào.</p>
            </div>

            <!-- Table voucher -->
            <div v-else class="table-responsive">
                <table class="table table-hover table-bordered custom-table">
                    <thead class="table-light">
                        <tr>
                            <th scope="col">MÃ VOUCHER</th>
                            <th scope="col">NỘI DUNG VOUCHER</th>
                            <th scope="col">MÔ TẢ</th>
                            <th scope="col">HẠN SỬ DỤNG</th>
                            <th scope="col">TRẠNG THÁI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="vc in dataVoucher" :key="vc.voucher.id">
                            <td>
                                <span class="text-dark">{{ vc.voucher.code }}</span>
                            </td>
                            <td><strong>{{ vc.voucher.title }}</strong></td>
                            <td>{{ vc.voucher.description || 'Không có mô tả' }}</td>
                            <td>{{ formatDate(vc.voucher.end_date_time) }}</td>
                            <td>
                                <span :class="[
                                    'badge',
                                    isVoucherValid(vc.voucher.end_date_time) ? 'bg-success' : 'bg-secondary',
                                ]">
                                    {{ isVoucherValid(vc.voucher.end_date_time) ? 'Còn hạn' : 'Hết hạn' }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { accountStore } from '@/stores/account';
import { useAuthStore } from '@/stores/auth';

const voucherStore = accountStore();
const authStore = useAuthStore();

const dataVoucher = ref([]);
const isLoading = ref(true);

const formatDate = (dateStr) => {
    if (!dateStr) return 'Không có ngày hết hạn';
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateStr).toLocaleDateString('vi-VN', options);
};

const isVoucherValid = (endDateTime) => {
    if (!endDateTime) return false;
    return new Date(endDateTime) > new Date();
};

onMounted(async () => {
    if (authStore.isLogin) {
        try {
            await voucherStore.loadVoucher();
            console.log('Voucher data:', voucherStore.vouchers);
            dataVoucher.value = voucherStore.vouchers.filter((v) => v.voucher);
        } catch (error) {
            console.error('Error loading vouchers:', error);
        } finally {
            isLoading.value = false;
        }
    } else {
        isLoading.value = false;
    }
});
</script>

<style scoped>
/* Wrapper chính */
.container-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: calc(100vh - 200px);
    /* Trừ chiều cao footer (ước lượng 200px) */
    padding: 30px 15px;
    padding-bottom: 100px;
    /* Tăng padding để cách footer */
    background-color: #f5f5f5;
    margin-bottom: 50px;
    /* Thêm margin để đảm bảo khoảng cách */
}

/* Container nội dung */
.container {
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 1200px;
}

/* Tiêu đề */
.text-custom {
    color: #3086b5;
    font-weight: 600;
}

/* Custom table */
.custom-table {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    border: 1px solid #e9ecef;
}

.custom-table thead th {
    background-color: #043c4d;
    color: #fff;
    font-weight: bold;
    text-align: center;
    padding: 12px;
}

.custom-table tbody td {
    vertical-align: middle;
    padding: 12px;
}

.table-hover tbody tr:hover {
    background-color: #f5f5f5;
    transition: background-color 0.3s ease;
}

/* Skeleton Loading */
.skeleton-table {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.skeleton-row {
    height: 50px;
    background: linear-gradient(90deg, #eee, #f5f5f5, #eee);
    background-size: 400% 400%;
    border-radius: 8px;
    animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
    0% {
        background-position: 200% 0;
    }

    100% {
        background-position: -200% 0;
    }
}

/* Responsive */
@media (max-width: 768px) {
    .container {
        padding: 20px;
    }

    .custom-table th,
    .custom-table td {
        font-size: 0.85rem;
        padding: 8px;
    }

    .container-wrapper {
        padding: 20px 10px;
        padding-bottom: 80px;
        margin-bottom: 30px;
    }
}

@media (max-width: 576px) {
    .text-custom {
        font-size: 1.25rem;
    }

    .custom-table {
        font-size: 0.8rem;
    }
}
</style>
