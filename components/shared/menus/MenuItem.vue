<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  items: {
    type: Array,
    default: () => [],
  },
});

const isHovered = ref(false);

const textClass = computed(() =>
  isHovered.value ? 'text-brand' : 'text-color-primary'
);
</script>

<template>
  <div
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="relative flex flex-row gap-1 items-center color-transition cursor-pointer h-full"
  >
    <span
      class="text-base font-normal transition-colors duration-300"
      :class="textClass"
    >
      {{ title }}
    </span>

    <SharedIconRenderer
      v-if="items"
      name="arrow"
      extention="svg"
      class="transition-colors duration-300"
      :class="[textClass, isHovered ? 'rotate-180' : '']"
    />
    <SharedMenusFirstLayerSubMenus v-if="isHovered && items" :items="items" />
  </div>
</template>
