<script setup>
const emits = defineEmits(['update:activeTab'])
const items = ref([
  { key: MARKET_DEPTH_TYPE.BOTH, icon: MARKET_DEPTH_TYPE.BOTH },
  { key: MARKET_DEPTH_TYPE.ASK, icon: MARKET_DEPTH_TYPE.ASK },
  { key: MARKET_DEPTH_TYPE.BID, icon: MARKET_DEPTH_TYPE.BID },
]);

const activeTab = ref(MARKET_DEPTH_TYPE.BOTH);
const activateTab = (key) => {
  activeTab.value = key;
  emits('update:activeTab', activeTab.value);
};
</script>

<template>
  <div class="flex flex-row justify-start items-center gap-4">
    <SharedIconRenderer
      v-for="item in items"
      @click="activateTab(item.key)"
      :key="item.key"
      :name="item.icon"
      extention="svg"
      :class="activeTab === item.key ? 'opacity-100' : 'opacity-50'"
      class="cursor-pointer opacity-transition"
    />
  </div>
</template>
