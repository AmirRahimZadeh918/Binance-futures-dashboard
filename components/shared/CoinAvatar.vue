<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex items-center gap-2">
    <img
      :src="icon"
      :alt="symbol"
      class="w-6 h-6 rounded-full object-cover"
    />
    <shared-base-text :text="symbol" />
  </div>
</template>
