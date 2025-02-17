<template>
  <a href="#" :class="['scrollToTop', { active: isActive }]">
    <i class="fal fa-long-arrow-alt-up"></i>
  </a>
</template>

<script setup>
defineProps({
  isActive: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
