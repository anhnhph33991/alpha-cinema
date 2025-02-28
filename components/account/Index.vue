<template>
    <div class="container min-vh-100 d-flex align-items-center justify-content-center py-5">
        <div class="card shadow-lg border-0 w-100" style="max-width: 800px;">
            <div class="card-body p-4">
                <form @submit.prevent="submited" class="row g-4">
                    <!-- Avatar -->
                    <div class="col-12 text-center mb-4">
                        <div class="position-relative">
                            <img :src="dataForm.avatar || 'https://via.placeholder.com/150'" alt="Avatar"
                                class="rounded-circle" style="width: 150px; height: 150px; object-fit: cover;" />
                            <label for="avatar-upload"
                                class="position-absolute bottom-0 end-0 p-2 bg-primary text-white"
                                style="">
                                Chọn
                            </label>
                            <input type="file" id="avatar-upload" accept="image/*" class="d-none"
                                @change="handleAvatarUpload" />
                        </div>
                    </div>

                    <!-- Họ Tên -->
                    <div class="col-md-6">
                        <label class="form-label fw-bold text-dark">
                            <span class="text-danger">*</span> Họ Tên
                        </label>
                        <input type="text" class="form-control rounded-3 shadow-sm" v-model="dataForm.name" />
                    </div>

                    <!-- Email -->
                    <div class="col-md-6">
                        <label class="form-label fw-bold text-dark">
                            <span class="text-danger">*</span> Email
                        </label>
                        <input type="email" class="form-control rounded-3 shadow-sm bg-light" v-model="dataForm.email"
                            readonly />
                    </div>

                    <!-- Số điện thoại -->
                    <div class="col-md-6">
                        <label class="form-label fw-bold text-dark">
                            <span class="text-danger">*</span> Số điện thoại
                        </label>
                        <input type="text" class="form-control rounded-3 shadow-sm" v-model="dataForm.phone" />
                    </div>

                    <!-- Ngày Sinh -->
                    <div class="col-md-6">
                        <label class="form-label fw-bold text-dark">
                            <span class="text-danger">*</span> Ngày Sinh
                        </label>
                        <input type="text" class="form-control rounded-3 shadow-sm bg-light" v-model="dataForm.birthday"
                            readonly />
                    </div>

                    <!-- Giới Tính -->
                    <div class="col-md-6">
                        <label class="form-label fw-bold text-dark">
                            <span class="text-danger">*</span> Giới Tính
                        </label>
                        <select v-model="dataForm.gender" class="form-select rounded-3 shadow-sm">
                            <option value="0">Nam</option>
                            <option value="1">Nữ</option>
                        </select>
                    </div>

                    <!-- Textarea -->
                    <div class="col-12">
                        <textarea class="form-control rounded-3 shadow-sm" rows="4" placeholder="Ghi chú..."></textarea>
                    </div>

                    <!-- Đổi mật khẩu link -->
                    <div class="col-12 mt-3">
                        <a @click.prevent="handleChangePassword"
                            class="text-primary fw-medium text-decoration-underline" href="#">
                            Đổi mật khẩu
                        </a>
                    </div>

                    <!-- Submit button -->
                    <div class="col-12 text-center mt-3">
                        <button class="btn btn-primary btn-lg px-5 py-2 shadow-sm rounded-3" type="submit">
                            Cập Nhật
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Modal đổi mật khẩu -->
        <a-modal :open="modal2Visible" title="Đổi mật khẩu" centered @ok="handleOk" @cancel="modal2Visible = false"
            class="custom-modal">
            <div class="row g-3 mt-3">
                <div class="col-12">
                    <label class="form-label fw-bold text-dark">
                        <span class="text-danger">*</span> Mật khẩu hiện tại
                    </label>
                    <input type="password" class="form-control rounded-3 shadow-sm"
                        v-model="formDataPassword.currentPassword" />
                </div>
                <div class="col-12">
                    <label class="form-label fw-bold text-dark">
                        <span class="text-danger">*</span> Mật khẩu mới
                    </label>
                    <input type="password" class="form-control rounded-3 shadow-sm"
                        v-model="formDataPassword.newPassword" />
                </div>
                <div class="col-12">
                    <label class="form-label fw-bold text-dark">
                        <span class="text-danger">*</span> Xác nhận mật khẩu mới
                    </label>
                    <input type="password" class="form-control rounded-3 shadow-sm"
                        v-model="formDataPassword.confirmPassword" />
                </div>
            </div>
        </a-modal>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { toast } from "vue-sonner";

const props = defineProps({
    user: {
        required: true,
    },
});

const modal2Visible = ref(false);
const dataForm = ref({
    name: "",
    email: "",
    phone: "",
    avatar: "",
    address: "",
    gender: "",
    birthday: "",
});

const formDataPassword = ref({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
});

const handleChangePassword = () => {
    modal2Visible.value = true;
};

const handleOk = () => {
    console.log(formDataPassword.value);
    toast.success("Đổi mật khẩu");
    modal2Visible.value = false;
};

const submited = () => {
    if (!dataForm.value) {
        console.warn('Data form is not initialized');
        return;
    }
    toast.success("Thay đổi thông tin thành công");
};

const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            dataForm.value.avatar = e.target.result; // Lưu base64 của ảnh
        };
        reader.readAsDataURL(file);
        toast.success("Ảnh avatar đã được tải lên");
    } else {
        toast.error("Vui lòng chọn một file ảnh hợp lệ");
    }
};

onMounted(() => {
    if (props.user) {
        dataForm.value = { ...props.user };
    } else {
        console.warn('User prop is null or undefined');
    }
    console.log(dataForm.value);
});
</script>

<style scoped>
/* Tùy chỉnh Bootstrap */
.card {
    border-radius: 10px;
    background: #fff;
}

.form-control,
.form-select {
    border-color: #ced4da;
    transition: all 0.3s ease;
}

.form-control:focus,
.form-select:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.form-control:disabled,
.form-control[readonly] {
    background-color: #e9ecef;
    opacity: 1;
}

.btn-primary {
    background-color: #007bff;
    border: none;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}

.cursor-pointer {
    cursor: pointer;
}

/* Modal custom */
:deep(.ant-modal-content) {
    border-radius: 10px;
    padding: 20px;
}

:deep(.ant-modal-header) {
    border-bottom: none;
    padding-bottom: 0;
}

:deep(.ant-modal-footer) {
    border-top: none;
    padding-top: 20px;
}

/* Responsive */
@media (max-width: 768px) {
    .card-body {
        padding: 1.5rem;
    }

    .btn-primary {
        width: 100%;
    }
}
</style>
