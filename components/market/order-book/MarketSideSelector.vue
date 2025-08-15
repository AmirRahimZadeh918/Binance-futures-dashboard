<script setup>
const items = ref([
  { key: "bid&Ask", icon: "bid&Ask" },
  { key: "ask", icon: "ask" },
  { key: "bid", icon: "bid" },
]);

const activeTab = ref("bid&Ask");
const activateTab = (key) => {
  activeTab.value = key;
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
