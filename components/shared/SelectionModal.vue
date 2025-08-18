<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array,
    default: () => []
  },
});

const selectedItem = defineModel();
const selectItem = (key) => {
  selectedItem.value = key;
  props.show = false
};
</script>

<template>
  <transition name="fade">
    <div
      v-if="props.show"
      class="flex flex-col justify-center py-4 surface-color-secondary border-[1px] border-color-secondary rounded-lg"
    >
    <div v-for="item in props.items" :key="item.key" @click="selectItem(item.key)" class="relative flex flex-row gap-4 p-2 hover:surface-color-primary cursor-pointer">
      <shared-base-text :text="item.label" class="whitespace-nowrap text-sm" />
      <shared-icon-renderer v-if="selectedItem === item.key" name="tick" extention="svg" class="w-5 absolute right-2" />
    </div>
  </div>
  </transition>
</template>