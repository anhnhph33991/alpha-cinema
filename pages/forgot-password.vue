<template>
  <div class="page page-center al-bg-light">
    <AuthForgotPassword v-if="!hasEmailCookie" @submit-form="submited" />
    <AuthVerifyOtp
      v-if="hasEmailCookie && !isOtpVerified"
      @submit-form-otp="submitOtp"
    />
    <AuthResetPassword v-if="isOtpVerified" @submit-form-reset="submitReset" />
  </div>
</template>

<script setup>
import { AuthResetPassword } from "#components";
import { toast } from "vue-sonner";
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();

const resetPasswordCookie = useCookie("reset_password_cookie");

const hasEmailCookie = computed(() => {
  return resetPasswordCookie.value && resetPasswordCookie.value.email;
});

const isOtpVerified = computed(() => {
  return (
    resetPasswordCookie.value && resetPasswordCookie.value.verify_otp === true
  );
});

definePageMeta({
  middleware: "guest",
});

const submited = (data) => {
  // console.log(data);
  authStore.sendOtp(data);
};

const submitOtp = (data) => {
  // console.log("data otp");
  // console.log(data);

  if (data === "" || !resetPasswordCookie.value) {
    toast.error("Vui lòng nhập mã OTP");
    return;
  }

  const formData = {
    email: resetPasswordCookie.value.email,
    otp: data,
  };

  // console.log(formData);

  authStore.verifyOtp(formData);
};

const submitReset = (data) => {
  if (
    data.password === "" ||
    data.password_confirm === "" ||
    !resetPasswordCookie.value ||
    !resetPasswordCookie.value.otp
  ) {
    toast.error("Vui lòng nhập đẩy đủ thông tin");
    return;
  }

  const formData = {
    email: resetPasswordCookie.value.email,
    otp: resetPasswordCookie.value.otp,
    password: data.password,
  };

  console.log("data password new");
  console.log(formData);

  authStore.resetPassword(formData);
};
</script>
