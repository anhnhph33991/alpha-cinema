<template>
  <div class="container al-bg-white">
    <div>
      <form @submit.prevent="submited" class="pt-4">
        <div class="row">
          <div
            class="col-lg-4 d-flex justify-content-center align-items-center flex-column mb-3"
          >
            <div class="avatar-wrapper mb-2">
              <img
                :src="dataForm.previewAvatar || avatarNull"
                alt="avatar"
                class="avatar-img"
                referrerpolicy="no-referrer"
              />
            </div>
            <input
              type="file"
              ref="fileInputRef"
              style="display: none"
              accept="image/*"
              @change="handleFileChange"
            />
            <button
              type="button"
              class="btn btn-custom mt-2"
              @click="triggerFileInput"
            >
              Tải ảnh lên
            </button>

            <small
              v-if="updateProfile.errors.avatar"
              id="helpId"
              class="form-text text-danger"
            >
              {{ updateProfile.errors.avatar }}
            </small>
          </div>

          <div class="row col-lg-8">
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="" class="form-label">
                  <span class="text-danger">*</span>
                  Họ Tên
                </label>
                <input
                  type="text"
                  placeholder="Nhập họ và tên "
                  class="form-control"
                  v-model="dataForm.name"
                  @input="updateProfile.clearFieldError('name')"
                />
                <small
                  v-if="updateProfile.errors.name"
                  id="helpId"
                  class="form-text text-danger"
                >
                  {{ updateProfile.errors.name }}
                </small>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="mb-3">
                <label for="" class="form-label"> Email </label>
                <input
                  type="email"
                  placeholder="Nhập email"
                  class="form-control"
                  v-model="dataForm.email"
                  :disabled="true"
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="mb-3">
                <label for="" class="form-label"> Số điện thoại </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nhập số điện thoại"
                  v-model="dataForm.phone"
                  @input="updateProfile.clearFieldError('phone')"
                />
                <small
                  v-if="updateProfile.errors.phone"
                  id="helpId"
                  class="form-text text-danger"
                >
                  {{ updateProfile.errors.phone }}
                </small>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="mb-3">
                <label for="" class="form-label">
                  <span class="text-danger">*</span>
                  Ngày Sinh
                </label>
                <input
                  type="date"
                  class="form-control"
                  v-model="dataForm.birthday"
                  @change="updateProfile.clearFieldError('birthday')"
                />
                <small
                  v-if="updateProfile.errors.birthday"
                  id="helpId"
                  class="form-text text-danger"
                >
                  {{ updateProfile.errors.birthday }}
                </small>
              </div>
            </div>

            <div class="col-lg-12">
              <div class="mb-3">
                <label for="" class="form-label">
                  <span class="text-danger">*</span>
                  Giới Tính
                </label>

                <select
                  v-model="dataForm.gender"
                  class="form-select"
                  @change="updateProfile.clearFieldError('gender')"
                >
                  <option :value="0">Nam</option>
                  <option :value="1">Nữ</option>
                </select>

                <small
                  v-if="updateProfile.errors.gender"
                  id="helpId"
                  class="form-text text-danger"
                >
                  {{ updateProfile.errors.gender }}
                </small>
              </div>
            </div>

            <div class="col-lg-12">
              <label for="" class="form-label">Địa chỉ </label>
              <textarea
                name=""
                id=""
                class="form-control"
                rows="3"
                placeholder="Nhập địa chỉ !!!"
                v-model="dataForm.address"
                @input="updateProfile.clearFieldError('gender')"
              ></textarea>

              <small
                v-if="updateProfile.errors.address"
                id="helpId"
                class="form-text text-danger"
              >
                {{ updateProfile.errors.address }}
              </small>
            </div>
            <div class="col-lg-12 text-end mt-3">
              <button class="btn btn-primary btn-2 btn-p-5">Cập nhật</button>

              <a class="ms-3 pass" @click.prevent="handleChangePassword"
                >Đổi mật khẩu</a
              >
            </div>
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
      :footer="null"
    >
      <hr />
      <!-- <div class="row mt-4">
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
          </div>
        </div>
      </div> -->

      <!-- <a-form
        :model="formChangePassword"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <div class="row mt-4">
          <div class="col-lg-12 col-md-12">
            <div class="mb-3">
              <a-form-item name="currentPassword">
                <label class="form-label">
                  <span class="text-danger">*</span> Mật khẩu hiện tại
                </label>
                <a-input-password
                  v-model="formChangePassword.currentPassword"
                />
              </a-form-item>
            </div>
          </div>
          <div class="col-lg-12 col-md-12">
            <div class="mb-3">
              <label for="" class="form-label">
                <span class="text-danger">*</span>
                Mật khẩu mới
              </label>
              <a-input-password v-model="formChangePassword.newPassword" />
            </div>
          </div>
          <div class="col-lg-12 col-md-12">
            <div class="mb-3">
              <label for="" class="form-label">
                <span class="text-danger">*</span>
                Xác nhận mật khẩu mới
              </label>
              <a-input-password v-model="formChangePassword.confirmPassword" />
            </div>
          </div>

          <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit">Submit</a-button>
          </a-form-item>
        </div>
      </a-form> -->

      <a-form
        :model="formChangePassword"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <div class="d-flex justify-content-center align-items-center">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="mb-3">
                <a-form-item
                  name="currentPassword"
                  :help="
                    authStore?.errors && authStore?.errors.password_old
                      ? authStore?.errors.password_old
                      : ''
                  "
                  :validate-status="
                    authStore?.errors && authStore?.errors.password_old
                      ? 'error'
                      : ''
                  "
                >
                  <label class="form-label">
                    <span class="text-danger">*</span> Mật khẩu hiện tại
                  </label>
                  <a-input-password
                    :value="formChangePassword.currentPassword"
                    @update:value="
                      (val) => {
                        formChangePassword.currentPassword = val;
                        authStore.errors.password_old = null;
                      }
                    "
                  />
                </a-form-item>
              </div>
            </div>

            <div class="col-lg-12 col-md-12">
              <div class="mb-3">
                <a-form-item
                  name="newPassword"
                  :help="
                    authStore?.errors && authStore?.errors.password
                      ? authStore?.errors.password
                      : ''
                  "
                  :validate-status="
                    authStore?.errors && authStore?.errors.password
                      ? 'error'
                      : ''
                  "
                >
                  <label class="form-label">
                    <span class="text-danger">*</span> Mật khẩu mới
                  </label>
                  <a-input-password
                    :value="formChangePassword.newPassword"
                    @update:value="
                      (val) => {
                        formChangePassword.newPassword = val;
                        authStore.errors.password = null;
                      }
                    "
                  />
                </a-form-item>
              </div>
            </div>

            <div class="col-lg-12 col-md-12">
              <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit">Xác nhận</a-button>
              </a-form-item>
            </div>
          </div>
        </div>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup>
import { toast } from "vue-sonner";
import avatarNull from "../../assets/images/avatarNull.png";
import { accountStore } from "~/stores/account";
import { useAuthStore } from "~/stores/auth";
const selectedFile = ref(null);
const updateProfile = accountStore();

const authStore = useAuthStore();

const props = defineProps({
  user: {
    required: true,
  },
});

const avatarUpload = ref(null);

const submited = () => {
  // updateProfile.useUpdateProfile(useAuthStore().user.id, dataForm.value);

  updateProfile.useUpdateProfile(useAuthStore().user.id, {
    name: dataForm.value.name,
    phone: dataForm.value.phone,
    avatar: avatarUpload.value ?? null,
    address: dataForm.value.address,
    gender: dataForm.value.gender,
    birthday: dataForm.value.birthday,
  });

  console.log({
    name: dataForm.value.name,
    phone: dataForm.value.phone,
    avatar: avatarUpload.value ?? null,
    address: dataForm.value.address,
    gender: dataForm.value.gender,
    birthday: dataForm.value.birthday,
  });
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
    dataForm.value.previewAvatar = URL.createObjectURL(file);
    // dataForm.value.avatar = file;
    avatarUpload.value = file;
    updateProfile.errors.avatar = null;
  } else {
    dataForm.value.previewAvatar = props.user.avatar;
    // dataForm.value.avatar = null;
    avatarUpload.value = null;
    updateProfile.errors.avatar = null;
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
  previewAvatar: "",
});

/**
 * Data form password
 */
const formDataPassword = ref({
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
});

const formChangePassword = reactive({
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
});

const handleChangePassword = () => {
  modal2Visible.value = true;

  authStore.errors.password = null;
  authStore.errors.password_old = null;

  formChangePassword.currentPassword = null;
  formChangePassword.newPassword = null;
};

const handleOk = () => {
  authStore.changePassword({
    password_old: formChangePassword.currentPassword,
    password: formChangePassword.newPassword,
  });

  console.log(formDataPassword.value);

  toast.success("Đổi mật khẩu");
};

const onFinish = (values) => {
  const response = authStore.changePassword({
    password_old: values.currentPassword,
    password: values.newPassword,
  });

  console.log(response);

  if (response.status == true) {
    modal2Visible.value = false;
    return;
  }
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

onMounted(() => {
  // console.log(props.user);
  dataForm.value = { ...props.user };

  if (dataForm.value.avatar) {
    dataForm.value.previewAvatar = dataForm.value.avatar;
    console.log(dataForm.value.previewAvatar);
  }

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
