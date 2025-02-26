<template>
  <div class="page page-center al-bg-light">
    <RegisterForm />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "guest",
});
</script>
