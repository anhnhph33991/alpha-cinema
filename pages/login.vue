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
import { ref, computed, watch } from 'vue'

const authStore = useAuthStore();

const submited = (data) => {
  authStore.login(data);
};
</script>
