<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="flex flex-col surface-color-secondary rounded-md w-56 h-96">
    <shared-menus-second-layer-sub-menu-items
      v-for="item in items"
      :key="item.key"
      :icon="item.icon"
      :title="item.title"
      class="flex flex-row justify-between items-center w-full p-4 group"
    />
  </div>
</template>
