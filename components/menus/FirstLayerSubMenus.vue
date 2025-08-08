<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});

const subItems = ref(null);
const activeItemId = ref(null)
const expand = (item) => {
  activeItemId.value = item.key
  subItems.value = item.subItems;
};
</script>

<template>
  <div class="flex flex-row gap-4 absolute top-16 surface-color-primary rounded-b-md p-4">
    <div class="w-56">
      <MenusFirstLayerSubMenuItems
        v-for="item in items"
        :item="item"
        :key="item.key"
        :active-item="activeItemId === item.key"
        @mouseenter="expand(item)"
      />
    </div>
    <MenusSecondLayerSubMenus v-if="subItems" :items="subItems" />
  </div>
</template>
