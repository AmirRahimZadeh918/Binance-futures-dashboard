<script setup>
const { getOrderBook } = useMarketDataApi();
const { currentSymbol } = useSymbol()

const orderBookData = ref()
const fetchOrderBook = async () => {
  try {
    const { data } = await getOrderBook(currentSymbol.value, 1000);
    orderBookData.value = data;
  } catch (err) {
    console.error(err);
  }
};

onMounted(() => {
  fetchOrderBook();
});

watch(currentSymbol, (newSymbol, oldSymbol) => {
  if (newSymbol !== oldSymbol) fetchOrderBook();
});

const orderListMode = ref(MARKET_DEPTH_TYPE.BOTH);
</script>

<template>
  <div
    class="flex flex-col surface-color-primary color-transition rounded-md w-full h-full"
  >
    <MarketOrderBookHeader />
    <div class="flex flex-col gap-3 p-4 h-full">
      <MarketOrderBookMarketSideSelector @update:active-tab="newValue => orderListMode = newValue" />
      <MarketOrderBookOrdersList :mode="orderListMode" :key="orderListMode" />
    </div>
  </div>
</template>
