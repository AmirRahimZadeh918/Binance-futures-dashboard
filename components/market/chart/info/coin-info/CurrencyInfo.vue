<script setup>
const items = ref([
  { label: "Rank", value: "1" },
  { label: "Market Capitalization", value: "$2.34T" },
  { label: "Fully Diluted Market Cap", value: "$2.47T" },
  { label: "Market Dominance", value: "57.8446%" },
  { label: "Volume", value: "$106.64B" },
  { label: "Volume/Market Cap", value: "4.55%" },
  { label: "Circulating Supply", value: "19,906,400 BTC" },
  { label: "Maximum Supply", value: "21,000,000 BTC" },
  { label: "Total Supply", value: "19,906,400 BTC" },
  { label: "Platform Concentration", value: "0.74" },
]);
</script>

<template>
  <div class="flex flex-col justify-start gap-6 h-full">
    <SharedCoinAvatar
      icon="https://static-file-1306379396.file.myqcloud.com/image/admin_mgs_image_upload/20201110/87496d50-2408-43e1-ad4c-78b47b448a6a.png"
      :symbol="'Bitcoin'"
    />

    <div class="flex flex-col justify-between h-full gap-2">
      <SharedInfoRow v-for="item in items" :key="item.label" :label="item.label" :value="item.value" />
    </div>
  </div>
</template>
