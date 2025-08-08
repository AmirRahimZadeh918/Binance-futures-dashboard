<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: {},
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
    <p class="text-base font-medium text-color-primary">{{ item.title }}</p>
    <SharedIconRenderer v-if="item.subItems" name="arrow" extention="svg" class="rotate-[270deg]" />
  </div>
</template>
