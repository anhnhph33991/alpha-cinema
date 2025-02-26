<template>
  <div class="container container-tight py-4 mt-5 card-md">
    <div class="card">
      <div class="card-body">
        <h2 class="h2 text-center mb-4 mt-3">Đăng ký tài khoản</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="luxchill@gmail.com"
              v-model="form.email"
            />
          </div>
          <div class="mb-2">
            <label class="form-label"> Mật khẩu </label>
            <div class="input-group input-group-flat">
              <input
                type="password"
                class="form-control"
                placeholder="Mật khẩu"
                v-model="form.password"
              />
              <span class="input-group-text">
                <a
                  href="#"
                  class="link-secondary"
                  data-bs-toggle="tooltip"
                  aria-label="Show password"
                  data-bs-original-title="Show password"
                  ><!-- Download SVG icon from http://tabler-icons.io/i/eye -->
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                    <path
                      d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"
                    ></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div class="form-footer">
            <button type="submit" class="btn btn-primary w-100">
              Đăng Nhập
            </button>
          </div>
        </form>
      </div>
      <div class="hr-text">Hoặc</div>
      <div class="card-body">
        <div class="row">
          <div class="col">
            <a href="#" class="btn w-100">
              <!-- Download SVG icon from http://tabler-icons.io/i/brand-github -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-google"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z"
                />
              </svg>
              Tiếp tục với google
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center text-secondary mt-3">
      Bạn chưa có tài khoản?
      <NuxtLink :to="{ name: 'register' }"> Đăng Ký </NuxtLink>
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
