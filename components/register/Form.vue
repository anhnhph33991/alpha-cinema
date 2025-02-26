<template>
  <div class="container container-tight py-4 mt-5 card-md">
    <div class="card">
      <div class="card-body">
        <h2 class="h2 text-center mb-4 mt-3">Đăng ký tài khoản</h2>
        <form>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="luxchill@gmail.com"
              autocomplete="off"
            />
          </div>
          <div class="mb-2">
            <label class="form-label"> Mật khẩu </label>
            <div class="input-group input-group-flat">
              <input
                type="password"
                class="form-control"
                placeholder="Mật khẩu"
                autocomplete="off"
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
          <div class="mb-2">
            <label class="form-check">
              <input type="checkbox" class="form-check-input" />
              <span class="form-check-label">
                Tôi cam kết tuân theo
                <a href="">chính sách bảo mật</a> và
                <a href="">điều kiện sử dụng</a> của AlphaCinema
              </span>
            </label>
          </div>
          <div class="form-footer">
            <button type="submit" class="btn btn-primary w-100">Sign Up</button>
          </div>
        </form>
      </div>
      <div class="hr-text">hoặc</div>
      <div class="card-body">
        <div class="row">
          <div class="col">
            <a href="#" class="btn w-100">
              <!-- Download SVG icon from http://tabler-icons.io/i/brand-github -->

              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
                width="24"
                height="24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M 26 2 C 13.308594 2 3 12.308594 3 25 C 3 37.691406 13.308594 48 26 48 C 35.917969 48 41.972656 43.4375 45.125 37.78125 C 48.277344 32.125 48.675781 25.480469 47.71875 20.9375 L 47.53125 20.15625 L 46.75 20.15625 L 26 20.125 L 25 20.125 L 25 30.53125 L 36.4375 30.53125 C 34.710938 34.53125 31.195313 37.28125 26 37.28125 C 19.210938 37.28125 13.71875 31.789063 13.71875 25 C 13.71875 18.210938 19.210938 12.71875 26 12.71875 C 29.050781 12.71875 31.820313 13.847656 33.96875 15.6875 L 34.6875 16.28125 L 41.53125 9.4375 L 42.25 8.6875 L 41.5 8 C 37.414063 4.277344 31.960938 2 26 2 Z M 26 4 C 31.074219 4 35.652344 5.855469 39.28125 8.84375 L 34.46875 13.65625 C 32.089844 11.878906 29.199219 10.71875 26 10.71875 C 18.128906 10.71875 11.71875 17.128906 11.71875 25 C 11.71875 32.871094 18.128906 39.28125 26 39.28125 C 32.550781 39.28125 37.261719 35.265625 38.9375 29.8125 L 39.34375 28.53125 L 27 28.53125 L 27 22.125 L 45.84375 22.15625 C 46.507813 26.191406 46.066406 31.984375 43.375 36.8125 C 40.515625 41.9375 35.320313 46 26 46 C 14.386719 46 5 36.609375 5 25 C 5 13.390625 14.386719 4 26 4 Z"
                ></path>
              </svg>

              Tiếp tục với google
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center text-secondary mt-3">
      Bạn đã có tài khoản?
      <NuxtLink :to="{ name: 'login' }"> Đăng Nhập </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>
