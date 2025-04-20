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

const submited = async (data) => {

  // authStore.register(data);
  // await authStore.checkUserResgister(data);
  // console.log(data);
};
</script>
