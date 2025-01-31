<template>
  <div>
    <h1>Movie: {{ slug }}</h1>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;
</script>

<style lang="scss" scoped></style>
