<template>
  <!-- ==========Login-Section========== -->
  <section class="account-section">
    <div class="container">
      <div class="padding-top padding-bottom">
        <div class="account-area">
          <div class="section-header-3">
            <span class="cate">hello !</span>
            <h2 class="title">welcome back</h2>
          </div>
          <form class="account-form" @submit.prevent="submited">
            <div class="form-group">
              <label for="email">
                Email
                <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                id="email"
                v-model="form.email"
              />
            </div>
            <div class="form-group">
              <label for="password">
                Password
                <span>*</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                v-model="form.password"
              />
            </div>
            <div class="form-group checkgroup">
              <input type="checkbox" id="bal2" required checked />
              <label for="bal2">remember me</label>
              <a href="forgot-password.html" class="forget-pass">
                Forgot Password?
              </a>
            </div>
            <div class="form-group text-center">
              <input type="submit" value="log in" />
            </div>
          </form>
          <div class="option">
            Don't have an account?
            <a href="#">register now</a>.
          </div>
          <div class="or">
            <span>Or</span>
          </div>
          <ul class="social-icons">
            <li>
              <a href="#">
                <i class="fab fa-google"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- ==========Login-Section========== -->
</template>

<script setup>
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
const form = ref({
  email: "",
  password: "",
});

const submited = () => {
  console.log("hehe");

  console.log(form.value);

  authStore.login(form.value);
};
</script>
