<template>
  <div class="container h-screen al-bg-white">
    <div>
      <form @submit.prevent="submited" class="pt-4">
        <div class="row">
          <div class="col-lg-6">
            <div class="mb-3">
              <label for="" class="form-label">
                <span class="text-danger">*</span>
                Họ Tên
              </label>
              <input type="text" class="form-control" v-model="dataForm.name" />
              <small id="helpId" class="form-text text-muted">Help text</small>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label for="" class="form-label">
                <span class="text-danger">*</span>
                Email
              </label>
              <input
                type="email"
                class="form-control"
                v-model="dataForm.email"
              />
              <small id="helpId" class="form-text text-muted">Help text</small>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label for="" class="form-label">
                <span class="text-danger">*</span>
                Số điện thoại
              </label>
              <input
                type="text"
                class="form-control"
                v-model="dataForm.phone"
              />
              <small id="helpId" class="form-text text-muted">Help text</small>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label for="" class="form-label">
                <span class="text-danger">*</span>
                Ngày Sinh
              </label>
              <input
                type="text"
                class="form-control"
                v-model="dataForm.birthday"
              />
              <small id="helpId" class="form-text text-muted">Help text</small>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label for="" class="form-label">
                <span class="text-danger">*</span>
                Giới Tính
              </label>
              <!-- <input
                type="text"
                class="form-control"
                v-model="dataForm.gender"
              /> -->

              <select v-model="dataForm.gender" class="form-select">
                <option value="0">Nam</option>
                <option value="1">Nữ</option>
              </select>

              <small id="helpId" class="form-text text-muted">Help text</small>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label for="" class="form-label">
                <span class="text-danger">*</span>
                Họ Tên
              </label>
              <input type="text" class="form-control" v-model="dataForm.name" />
              <small id="helpId" class="form-text text-muted">Help text</small>
            </div>
          </div>

          <div class="col-lg-12">
            <textarea name="" id="" class="form-control" rows="6"></textarea>
          </div>

          <div class="col-lg-12 mt-3">
            <a @click.prevent="handleChangePassword">Đổi mật khẩu</a>
          </div>

          <div class="col-lg-12 text-center mt-3">
            <button class="btn btn-primary btn-2 btn-p-5">Cập Nhật</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { toast } from "vue-sonner";

const props = defineProps({
  user: {
    required: true,
  },
});

const dataForm = ref({
  name: "",
  email: "",
  phone: "",
  avatar: "",
  address: "",
  gender: "",
  birthday: "",
});

const handleChangePassword = () => {
  toast.success("Đổi mật khẩu");
};

const submited = () => {
  toast.success("Thay đổi thông tin thành công");
};

onMounted(() => {
  dataForm.value = { ...props.user };
  console.log(dataForm.value);
});
</script>

<style scoped>
.form-control {
  border-radius: 0px;
}

a {
  color: #337ab7 !important;
}

.btn-p-5 {
  padding: 7px 24px;
  --bs-btn-border-color: none !important;
}

.form-select {
  border-radius: 0px;
}
</style>
