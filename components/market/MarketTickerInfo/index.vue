<script setup>
const props = defineProps({
  symbol: { type: String, required: true, default: "BTCUSDT" },
});

const { get24hTicker } = useMarketDataApi()
import { useMarketDataSocket } from "@/composables/services/marketData/useMarketDataSocket";

const fetchInitial = async () => {
  try {
    const res = await get24hTicker(props.symbol);
    stats.value = res.data;
  } catch (error) {
    console.error("Error fetching initial data:", error);
  }
};

const { stats } = useMarketDataSocket(props.symbol);

onMounted(() => {
  fetchInitial();
});
</script>

<template>
  <div
    class="flex flex-row gap-8 surface-color-primary color-transition w-full rounded-sm px-4 py-3 relative overflow-hidden"
  >
    <div class="flex flex-col lg:flex-row items-center gap-8">
      <MarketMarketTickerInfoCurrencySwitcher />
      <MarketMarketTickerInfoCurrencyStats :data="stats" />
    </div>
    <MarketMarketTickerInfoCurrencyOverview :data="stats" />
    <div class="surface-color-primary">
      <SharedIconRenderer
        name="elipisese"
        extention="svg"
        class="text-color-secondary w-4 cursor-pointer absolute right-5 top-7"
      />
    </div>
  </div>
</template>
