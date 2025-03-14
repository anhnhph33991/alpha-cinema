<template>
  <div class="page page-center al-bg-light">
    <!-- <RegisterForm @submit-form="submited" /> -->
    <RegisterForm />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "guest",
});
import { RegisterForm } from "#components";
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();

// const submited = (data) => {
//   console.log("Submitted values:", data); 
//   authStore.register(data);
// };
</script>
