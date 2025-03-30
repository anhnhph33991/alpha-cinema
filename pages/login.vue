<template>
  <div class="page page-center al-bg-light">
    <LoginForm @submit-form="submited" />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "guest",
});

import { LoginForm } from "#components";
import { useAuthStore } from "~/stores/auth";

// const { login } = useSanctumAuth();

const authStore = useAuthStore();

const submited = async (data) => {
  // await login(data);
  authStore.login(data);
};
</script>
