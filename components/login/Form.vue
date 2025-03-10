<template>
  <div class="container-wrapper">
    <div class="image-container">
      <!-- ảnh -->
    </div>
    <div class="container container-tight py-4 mt-5 card-md">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <h2 class="title">Đăng Nhập</h2>
          </div>
          <form @submit.prevent="handleSubmit">
            <div class="row">
              <div class="col-md-12 mb-3">
                <label class="form-label">
                  <span class="text-danger">*</span> Email</label
                >
                <input
                  type="email"
                  class="form-control"
                  placeholder="luxchill@gmail.com"
                  v-model="form.email"
                  autocomplete="off"
                />
              </div>

              <div class="col-md-12 mb-3">
                <label class="form-label">
                  <span class="text-danger">*</span> Mật khẩu</label
                >
                <div class="input-group input-group-flat">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Mật khẩu"
                    v-model="form.password"
                    autocomplete="off"
                  />
                  <span class="input-group-text">
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
              </div>
            </div>

            <div class="form-footer">
              <button type="submit" class="btn btn-danger btn-3">
                Đăng Nhập
              </button>
            </div>
          </form>
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
      </div>

      <div class="text-center text-secondary mt-3">
        Bạn chưa có tài khoản?
        <NuxtLink :to="{ name: 'register' }">Đăng Ký</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["submit-form"]);

const form = ref({
  email: "",
  password: "",
});

const handleSubmit = () => {
  console.log(form.value);
  emit("submit-form", { ...form.value });
};
</script>

<style scoped>
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
