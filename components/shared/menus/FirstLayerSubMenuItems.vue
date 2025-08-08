<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  activeItem: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="relative flex flex-row justify-between items-center w-full rounded-md p-4"
    :class="activeItem ? 'surface-color-secondary' : ''"
  >
    <p class="text-base font-medium text-color-primary">{{ title }}</p>
    <SharedIconRenderer name="arrow" extention="svg" class="rotate-[270deg]" />
  </div>
</template>
