<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex justify-between items-center color-transition">
    <SharedBaseText :text="label" class="text-color-secondary text-sm" />
    <SharedBaseText :text="value" class="text-color-primary text-sm" />
  </div>
</template>
