<template>
  <div class="page page-center al-bg-light">
    <!-- <RegisterForm /> -->
    <RegisterForm @submit-form="submited" />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "guest",
});

import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();

const submited = (data) => {

  // authStore.register(data);
  authStore.checkUserResgister(data);
  // console.log(data);
};
</script>
