<template>
  <div>
    <Header />

    <div class="main">
      <slot />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Footer from "~/components/Footer.vue";
import Header from "~/components/Header.vue";
</script>

<style lang="scss" scoped></style>
