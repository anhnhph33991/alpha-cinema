<template>
  <div class="container-wrapper">
    <div class="image-container">
      <!-- ảnh -->
    </div>
    <div class="container container-tight py-4 mt-5 card-md">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <h2 class="title">Đăng Ký</h2>
          </div>
          <!-- Form bắt đầu -->
          <Form :validation-schema="validationSchema" @submit="onSubmit">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label">
                  <span class="text-danger">*</span> Họ tên
                </label>
                <Field
                  name="name"
                  type="text"
                  class="form-control"
                  placeholder="Họ tên"
                  v-model="form.name"
                  autocomplete="off"
                />
               
                <ErrorMessage name="name" v-slot="{ message }">
                  <div class="text-danger error-message">{{ message }}</div>
                </ErrorMessage>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">
                  <span class="text-danger">*</span> Email
                </label>
                <Field
                  name="email"
                  type="email"
                  class="form-control"
                  placeholder="Nhập email"
                  v-model="form.email"
                  autocomplete="off"
                />
                <!-- errors.resgister -->
                <div v-if="authStore.errors?.resgister?.errors?.email?.[0]" class="text-danger error-message">
                  {{ authStore.errors?.resgister?.errors?.email[0] }} 
                </div>

                <ErrorMessage name="email" v-slot="{ message }">
                  <div class="text-danger error-message">{{ message }}</div>
                </ErrorMessage>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label">
                  <span class="text-danger">*</span> Mật khẩu
                </label>
                <div class="input-group input-group-flat">
                  <Field
                    name="password"
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control"
                    placeholder="Mật khẩu"
                    v-model="form.password"
                    autocomplete="off"
                  />
                  <span
                    class="input-group-text"
                    @click="togglePasswordVisibility"
                  >
                    <a
                      class="link-secondary"
                      data-bs-toggle="tooltip"
                      aria-label="Show password"
                      data-bs-original-title="Show password"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                        <path
                          d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"
                        ></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <ErrorMessage name="password" v-slot="{ message }">
                  <div class="text-danger error-message">{{ message }}</div>
                </ErrorMessage>
              </div>

              <div class="col-md-6 mb-3">
                <label class="form-label"> Giới tính</label>
                <div class="input-group input-group-flat">
                  <!-- <select class="form-control" v-model="form.gender">
                    <option value="" disabled selected>Chọn giới tính</option>
                    <option value="0">Nam</option>
                    <option value="1">Nữ</option>
                  </select> -->

                  <Field name="gender" v-model="form.gender" v-slot="{ field, errors }">
                    <select v-bind="field" class="form-control" >
                      <option value="" disabled>Chọn giới tính</option>
                      <option value="0">Nam</option>
                      <option value="1">Nữ</option>
                    </select>
                    <div class="text-danger error-message">{{ errors[0] }}</div>
                  </Field>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label"> Ngày sinh</label>
                <Field name="birthday" v-slot="{ field, errors }">
                  <input type="date" class="form-control" v-bind="field"  v-model="form.birthday"/>
                  <div class="text-danger error-message">{{ errors[0] }}</div>
                </Field>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">
                  <span class="text-danger">*</span> Số điện thoại
                </label>
                <Field
                  name="phone"
                  type="tel"
                  class="form-control"
                  placeholder="Số điện thoại"
                  v-model="form.phone"
                  autocomplete="off"
                />

                <div v-if="authStore.errors?.resgister?.errors?.phone?.[0]" class="error-message">
                  {{ authStore.errors?.resgister?.errors?.phone[0] }}
                </div>

                <ErrorMessage name="phone" v-slot="{ message }">
                  <div class="text-danger error-message">{{ message }}</div>
                </ErrorMessage>
              </div>
            </div>

            <div class="form-footer">
              <button type="submit" class="btn btn-danger btn-3">
                Đăng Ký
              </button>
            </div>
          </Form>

          <!-- Form kết thúc -->
        </div>

        <div class="col">
          <a
            href="https://alphacinema.me/auth/google/redirect"
            class="btn btn-google btn-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-google"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"
              />
            </svg>
            Tiếp tục với Google
          </a>
        </div>
        <div class="text-center text-secondary mt-3">
          Bạn đã có tài khoản?
          <NuxtLink :to="{ name: 'login' }"> Đăng Nhập </NuxtLink>
        </div>
      </div>
    </div>

    <ClientOnly>
        <a-modal
          :open="openModalVerifyEmail"
          width="1000px"
          centered
          @cancel="handleCancelVerifyEmail"
          :footer="null"
        >
          <div class="d-flex justify-content-center align-items-center">
            <a-card :bordered="false" style="width: 300px">
              <div>
                <div>
                  <h6 class="text-center fw-bold">Vui lòng kiểm tra email</h6>
                </div>
                <div style="padding: 3rem 0">
                  <ClientOnly>
                    <PrimeInputOtp
                      v-model="form.otp"
                      :length="6"
                      class="justify-content-center"
                    />
                  </ClientOnly>
                </div>

                <div class="text-center">
                  <a-button type="primary" @click="handleSubmitVerifyEmail"
                    >Gửi</a-button
                  >
                </div>
              </div>
            </a-card>
          </div>
        </a-modal>
      </ClientOnly>

  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";
import { useAuthStore } from "~/stores/auth";

// Show password
const showPassword = ref(false);
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const authStore = useAuthStore();

const openModalVerifyEmail = ref(false);

// Định nghĩa schema validation sử dụng Zod
const validationSchema = toTypedSchema(
  zod.object({
    name: zod.string().min(1, { message: "Vui lòng nhập họ tên" }),
    email: zod
      .string()
      .min(1, { message: "Vui lòng nhập email" })
      .regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        { message: "Email không hợp lệ" }
      ), // Regex kiểm tra email
    password: zod
      .string()
      .min(8, { message: "Mật khẩu phải có ít nhất 8 ký tự" }),
    phone: zod
      .string()
      .min(1, { message: "Vui lòng nhập số điện thoại" })
      .regex(/^0\d{9}$/, { message: "Số điện thoại phải bắt đầu bằng 0 và có 10 chữ số" }), // Kiểm tra số điện thoại bắt đầu bằng 0 và có 10 chữ số
    gender: zod
      .enum(["0", "1"], { message: "Giới tính phải là Nam hoặc Nữ" })
      .refine((val) => val !== "", { message: "Bắt buộc chọn giới tính" }),
    birthday: zod.preprocess(
      (value) => value ?? "",
      zod
        .string()
        .nonempty("Ngày sinh không được để trống")
        .refine(
          (value) => {
            const date = new Date(value);
            return !isNaN(date.getTime());
          },
          { message: "Ngày sinh không hợp lệ" }
        )
        .refine(
          (value) => {
            const date = new Date(value);
            const today = new Date();
            return date < today;
          },
          { message: "Ngày sinh không thể là ngày tương lai" }
        )
    ),
  })
);


// Thông tin form
const form = ref({
  name: "",
  email: "",
  password: "",
  gender: "",
  birthday: "",
  phone: "",
});

// Hàm xử lý thay đổi tab hoặc điều hướng
onBeforeRouteLeave((to, from) => {
  if(authStore.errors?.resgister)
  authStore.errors.resgister = null; // Xóa lỗi trong authStore
});

const emit = defineEmits(["submit-form"]);

const onSubmit = async (value) => {
  try {
    // await emit("submit-form", value);
    await authStore.checkUserResgister(value); // Đợi hàm checkUserResgister hoàn tất
    console.log(authStore.success.register);
   
    if(authStore.success?.register == 1){
        setTimeout(() => {
        openModalVerifyEmail.value = true;
      }, 1000);
    }
   
  } catch (error) {
    console.error("Lỗi:", error);
  }
};

const handleCancelVerifyEmail = () => {
  openModalVerifyEmail.value = false;
};

const handleSubmitVerifyEmail = async () => {
  try {
    console.log(form.value);
    authStore.confirmEmail(form.value);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
.error-message {
  font-size: 0.875rem;
  font-style: italic;
  color: #dc3545;
  margin-top: 5px;
  display: block;
}

.card-md {
  width: 100%;
}

.container-wrapper {
  position: relative;
  background-image: url("/public/background.jpg");
  background-size: cover;
  background-position: center;
  padding: 50px 0;
  height: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  width: 100%;
  max-width: 35rem;
  margin-top: 0;
}

.image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.title {
  margin-bottom: 50px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  position: relative;
}

.title::after {
  content: "";
  position: absolute;
  width: 50%;
  height: 2px;
  background-color: #ff5722;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.container {
  margin-bottom: 50px;
}

.btn {
  padding: 10px 0;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  margin: 5px auto;
}

.btn-3 {
  width: 30%;
  background-image: linear-gradient(
    to right,
    #fc3606 0%,
    #fda085 51%,
    #fc7704 100%
  ) !important;
  background-size: 200% 100%;
  transition: background-position 0.5s ease;
}

.btn-3:hover {
  background-position: 100% 0;
}

.btn-google {
  width: 50%;
  background-color: linear-gradient(
    to right,
    #0a64a7 0%,
    #258dcf 51%,
    #3db1f3 100%
  ) !important;
  border: 1px solid #1877f2;
  color: #fff;
  transition: background-color 0.5s ease, background-position 0.5s ease;
  background-size: 200% 100%;
}

.btn-google:hover {
  background-position: 100% 0;
}

.hr-text {
  text-align: center;
  margin: 20px 0;
  position: relative;
}

.hr-text:before,
.hr-text:after {
  content: "";
  position: absolute;
  top: 50%;
  width: 45%;
  height: 1px;
  background-color: #ddd;
}

.hr-text:before {
  left: 0;
}

.hr-text:after {
  right: 0;
}

.hr-text span {
  position: relative;
  font-size: 14px;
  padding: 0 10px;
}

::placeholder {
  color: #bbb;
  opacity: 1;
}

.text-blue {
  color: #5b9bd1;
  text-decoration: none;
}

.text-blue:hover {
  text-decoration: underline;
}

.text-center.text-secondary.mt-3 {
  margin-bottom: 30px;
}
</style>
