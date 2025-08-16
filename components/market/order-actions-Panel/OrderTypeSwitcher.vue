<script setup>
const activeTab = ref("limit");
const tabs = [
  { key: "limit", label: "Limit" },
  { key: "market", label: "Market" },
  { key: "stop-limit", label: "Stop Limit" },
  { key: "stop-market", label: "Stop Market" },
  { key: "trailing-stop", label: "Trailing Stop" },
  { key: "conditional", label: "Conditional" },
  { key: "post-only", label: "Post Only" },
  { key: "twap", label: "TWAP" },
  { key: "scaled-order", label: "Scaled Order" },
];

const showDropdown = ref(false);
</script>

<template>
  <div class="flex flex-row items-center gap-2 border-b-[1px] border-color-secondary">
    <SharedTabs :items="tabs.slice(0, 3)" v-model="activeTab" />
    <div class="flex flex-col items-end relative">
      <SharedIconRenderer
        @mouseover="showDropdown = true"
        @mouseleave="showDropdown = false"
        name="arrow-down"
        extention="svg"
        class="text-color-secondary cursor-pointer hover:rotate-180 transition-all w-5 -ml-4"
      />
      <SharedSelectionModal class="w-32 h-56 top-6 mr-1 absolute" :show="showDropdown" />
    </div>
  </div>
</template>
