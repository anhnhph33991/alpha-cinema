<template>
  <div class="container al-bg-white">
    <div>
      <form @submit.prevent="submited" class="pt-4">
        <div class="row">
          <div class="col-lg-4 d-flex justify-content-center align-items-center flex-column mb-3">
            <div class="avatar-wrapper mb-2">
              <img :src="dataForm.avatar || avatarNull" alt="avatar" class="avatar-img" referrerpolicy="no-referrer" />
            </div>
            <input type="file" ref="fileInputRef" style="display: none" accept="image/*" @change="handleFileChange" />
            <button type="button" class="btn btn-custom mt-2" @click="triggerFileInput">Tải ảnh lên</button>
          </div>

          <div class="row col-lg-8">
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="" class="form-label">
                  <span class="text-danger">*</span>
                  Họ Tên
                </label>
                <input type="text" placeholder="Nhập họ và tên " class="form-control" v-model="dataForm.name" />
                <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
              </div>
            </div>

            <div class="col-lg-6">
              <div class="mb-3">
                <label for="" class="form-label">
                  <span class="text-danger">*</span>
                  Email
                </label>
                <input type="email" placeholder="Nhập email" class="form-control" v-model="dataForm.email" />
                <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
              </div>
            </div>

            <div class="col-lg-6">
              <div class="mb-3">
                <label for="" class="form-label">
                  <span class="text-danger">*</span>
                  Số điện thoại
                </label>
                <input type="text" class="form-control" placeholder="Nhập số điện thoại" v-model="dataForm.phone" />
                <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
              </div>
            </div>

            <div class="col-lg-6">
              <div class="mb-3">
                <label for="" class="form-label">
                  <span class="text-danger">*</span>
                  Ngày Sinh
                </label>
                <input type="date" class="form-control" v-model="dataForm.birthday" />
                <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
              </div>
            </div>

            <div class="col-lg-12">
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
                  <option :value="0">Nam</option>
                  <option :value="1">Nữ</option>
                </select>

                <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
              </div>
            </div>


            <div class="col-lg-12">
              <label for="" class="form-label">Địa chỉ </label>
              <textarea name="" id="" class="form-control" rows="2" placeholder="Nhập địa chỉ !!!"
                v-model="dataForm.address"></textarea>
            </div>
            <div class="col-lg-12 text-end mt-3">
              <button class="btn btn-primary btn-2 btn-p-5">Cập nhật</button>

              <a class="ms-3 pass" @click.prevent="handleChangePassword">Đổi mật khẩu</a>
            </div>
          </div>

          <!-- <div class="col-lg-12 mt-3">
           
          </div> -->


        </div>
      </form>
    </div>

    <a-modal :open="modal2Visible" title="ĐỔI MẬT KHẨU" centered @ok="handleOk" @cancel="modal2Visible = false">
      <hr />
      <div class="row mt-4">
        <div class="col-lg-12 col-md-12">
          <div class="mb-3">
            <label for="" class="form-label">
              <span class="text-danger">*</span>
              Mật khẩu hiện tại
            </label>
            <input type="password" class="form-control" v-model="formDataPassword.currentPassword" />
            <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
          </div>
        </div>
        <div class="col-lg-12 col-md-12">
          <div class="mb-3">
            <label for="" class="form-label">
              <span class="text-danger">*</span>
              Mật khẩu mới
            </label>
            <input type="password" class="form-control" v-model="formDataPassword.newPassword" />
            <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
          </div>
        </div>
        <div class="col-lg-12 col-md-12">
          <div class="mb-3">
            <label for="" class="form-label">
              <span class="text-danger">*</span>
              Xác nhận mật khẩu mới
            </label>
            <input type="password" class="form-control" v-model="formDataPassword.confirmPassword" />
            <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script setup>
import { toast } from "vue-sonner";
import avatarNull from "../../assets/images/avatarNull.png"
import { accountStore } from "~/stores/account";
const selectedFile = ref(null);
const updateProfile = accountStore();

const props = defineProps({
  user: {
    required: true,
  },
});

const submited = () => {
  // if (selectedFile.value) {
  //   dataForm.value.avatar = selectedFile.value
  // }
  updateProfile.useUpdateProfile(useAuthStore().user.id, dataForm.value);
  // useAuthStore().user = dataForm.value;
  console.log("Thông tin form:", dataForm.value);
};
const fileInputRef = ref(null);

const triggerFileInput = () => {
  if (fileInputRef.value) {
    fileInputRef.value.click();
  }
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    selectedFile.value = file;
    dataForm.value.avatar = URL.createObjectURL(file);
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



onMounted(() => {
  console.log(props.user);
  dataForm.value = { ...props.user };
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

.avatar-wrapper {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
