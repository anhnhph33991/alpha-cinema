<template>
  <div class="container-wrapper">
    <div class="image-container">
      <!-- ảnh -->
    </div>

    <div v-if="useAuthStore().isLoading" class="overlay">
      <a-spin />
    </div>

    <div class="container container-tight py-4 mt-5 card-md">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <h2 class="title">Quên Mật Khẩu</h2>
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
                  @input="clearFieldError('email')"
                />

                <small
                  v-if="useAuthStore().errors && useAuthStore().errors.email"
                  class="text-danger"
                >
                  {{ useAuthStore().errors.email }}
                </small>
              </div>
            </div>

            <div class="form-footer">
              <button type="submit" class="btn btn-danger btn-3">Gửi</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["submit-form"]);

const form = ref({
  email: "",
});

const handleSubmit = () => {
  emit("submit-form", form.value.email);
};

const clearFieldError = (filed) => {
  if (useAuthStore().errors[filed]) {
    useAuthStore().errors[filed] = null;
  }
};
</script>

<style scoped>
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7); /* Màu nền mờ */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

/* Ẩn form nhưng vẫn giữ hiệu ứng mờ */
.form-container {
  position: relative;
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
