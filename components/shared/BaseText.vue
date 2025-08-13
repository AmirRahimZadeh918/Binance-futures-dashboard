<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  text: {
    type: String,
    default: "Place Your Text",
  },
});
</script>

<template>
  <p
    class="text-base color-transition"
    :class="[
      variant === 'primary' ? 'text-color-primary' : 'text-color-secondary',
    ]"
  >
    {{ text }}
  </p>
</template>
