<template>
  <div class="container al-bg-white">
    <div>
      <form @submit.prevent="submited" class="pt-4">
        <div class="row">
          <div class="col-lg-12">
            <div class="d-flex align-items-center mb-3">
              <!-- <img
                :src="
                  dataForm.avatar
                    ? URL.createObjectURL(dataForm.avatar)
                    : 'default-avatar.png'
                "
                alt="avatar"
                class="img-thumbnail"
                width="150"
                height="150"
              /> -->
              <button
                type="button"
                class="btn btn-custom ms-3"
                @click="triggerFileInput"
              >
                Tải ảnh lên
              </button>
              <input
                type="file"
                class="d-none"
                id="avatar"
                @change="handleFileChange"
                ref="fileInput"
              />
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
            <label for="" class="form-label">Địa chỉ </label>
            <textarea name="" id="" class="form-control" rows="2"></textarea>
          </div>

          <div class="col-lg-12 mt-3 pass">
            <a @click.prevent="handleChangePassword">Đổi mật khẩu</a>
          </div>

          <div class="col-lg-12 text-center mt-3">
            <button class="btn btn-primary btn-2 btn-p-5">Cập Nhật</button>
          </div>
        </div>
      </form>
    </div>

    <a-modal
      :open="modal2Visible"
      title="ĐỔI MẬT KHẨU"
      centered
      @ok="handleOk"
      @cancel="modal2Visible = false"
    >
      <hr />
      <div class="row mt-4">
        <div class="col-lg-12 col-md-12">
          <div class="mb-3">
            <label for="" class="form-label">
              <span class="text-danger">*</span>
              Mật khẩu hiện tại
            </label>
            <input
              type="password"
              class="form-control"
              v-model="formDataPassword.currentPassword"
            />
            <small id="helpId" class="form-text text-muted">Help text</small>
          </div>
        </div>
        <div class="col-lg-12 col-md-12">
          <div class="mb-3">
            <label for="" class="form-label">
              <span class="text-danger">*</span>
              Mật khẩu mới
            </label>
            <input
              type="password"
              class="form-control"
              v-model="formDataPassword.newPassword"
            />
            <small id="helpId" class="form-text text-muted">Help text</small>
          </div>
        </div>
        <div class="col-lg-12 col-md-12">
          <div class="mb-3">
            <label for="" class="form-label">
              <span class="text-danger">*</span>
              Xác nhận mật khẩu mới
            </label>
            <input
              type="password"
              class="form-control"
              v-model="formDataPassword.confirmPassword"
            />
            <small id="helpId" class="form-text text-muted">Help text</small>
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script setup>
import { toast } from "vue-sonner";

const props = defineProps({
  user: {
    required: true,
  },
});
const triggerFileInput = () => {
  const fileInput = $refs.fileInput;
  if (fileInput) {
    fileInput.click();
  }
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    dataForm.value.avatar = file;
    console.log("File đã chọn:", file);
  }
};

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

/**
 * Data form password
 */
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
};

const submited = () => {
  toast.success("Thay đổi thông tin thành công");
};

onMounted(() => {
  console.log(props.user);

  dataForm.value = { ...props.user };
  console.log(dataForm.value);
});
</script>

<style scoped>
.container {
  margin: 30px 0;
}

.form-control {
  border-radius: 0px;
}

a {
  color: #337ab7 !important;
}

.btn-p-5 {
  padding: 7px 24px;
  --bs-btn-border-color: none !important;
  margin: 30px 0;
}

.form-select {
  border-radius: 0px;
}

.pass:hover {
  text-decoration: underline;
}

.btn-warning {
  font-weight: bold;
  padding: 5px 20px;
}

.btn-custom {
  background-color: #043c4d;
  color: white;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 15px;
}

.btn-custom:hover {
  background-color: #047091;
}
hr {
  border: 1px solid #a0a0a0;
}
</style>
