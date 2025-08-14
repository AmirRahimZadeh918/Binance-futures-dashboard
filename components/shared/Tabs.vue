<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: [],
  },
});

const selectedTab = defineModel();
</script>

<template>
  <div class="flex flex-row gap-1">
    <button
      v-for="item in items"
      @click="selectedTab = item.key"
      class="flex flex-col items-center relative text-color-primary p-2"
    >
      <SharedBaseText :text="item.label" :variant="selectedTab === item.key ? 'primary' : 'secondary'" class="hover:text-color-primary text-sm font-bold tracking-wide" />
      <div class="bg-brand w-4 h-1 absolute bottom-0 opacity-transition" :class="selectedTab === item.key ? 'opacity-100' : 'opacity-0'"></div>
    </button>
  </div>
</template>
