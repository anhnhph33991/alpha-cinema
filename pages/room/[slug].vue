<template>
  <div>
    <h1>Room Slug: {{ slug }}</h1>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = ref(route.params.slug);

console.log(slug);
</script>
