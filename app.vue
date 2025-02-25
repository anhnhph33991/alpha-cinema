<template>
  <div>
    <NuxtLoadingIndicator :throttle="0" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <Toaster :duration="2000" position="top-right" close-button richColors />
  </div>
</template>

<script setup>
import { Toaster } from "vue-sonner";
</script>
