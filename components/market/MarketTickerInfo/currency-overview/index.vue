<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});

const data = computed(() => {
  return [
    { label: "Mark", value: props.data?.lastPrice || "-", isPrice: true },
    { label: "Index", value: props.data?.index || "-", isPrice: true },
    { label: "Funding", value: props.data?.funding || "-", isPrice: false },
    {
      label: "24h High",
      value: props.data?.highPrice || "-" || "-",
      isPrice: true,
    },
    { label: "24h Low", value: props.data?.lowPrice || "-", isPrice: true },
    {
      label: "24h Volume(BTC)",
      value: props.data?.volume || "-",
      isPrice: true,
    },
    {
      label: "24h Volume(USDT)",
      value: props.data?.volumeUSDT || "-",
      isPrice: true,
    },
    {
      label: "Open Interest(USDT)",
      value: props.data?.openInterestUSDT || "-",
      isPrice: true,
    },
  ];
});
</script>

<template>
  <div class="flex flex-row items-center gap-4 overflow-x-auto">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="flex flex-col items-start whitespace-nowrap"
    >
      <SharedBaseText
        :text="item.label"
        variant="secondary"
        class="text-sm font-medium"
      />
      <div>
        <SharedLivePrice
          v-if="item.isPrice"
          :data="item.value"
          class="text-xs font-medium"
        />
        <SharedLivePercent
          v-else-if="!item.isPrice"
          :data="item.value"
          :decimals="3"
          class="text-xs font-medium"
        />
      </div>
    </div>
  </div>
</template>
