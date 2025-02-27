<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :throttle="0" />
    <NuxtPage />
    <Toaster :duration="2000" position="top-right" close-button richColors />
  </NuxtLayout>
</template>

<script setup>
import { Toaster } from "vue-sonner";
</script>
