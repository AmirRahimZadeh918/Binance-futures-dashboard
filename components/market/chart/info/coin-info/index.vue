<script setup>
const { getTokenInfo } = useMarketDataApi();
const { currentSymbol } = useSymbol();

// getTokenInfo('BTC').then(res => {
//   console.log(res.data)
// }).catch(err => {
//   console.error(err)
// })
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <SharedLoader />
  </div>
  <!-- <section class="grid grid-cols-1 lg:grid-cols-2 gap-x-20 h-full">
    <MarketChartInfoCoinInfoCurrencyInfo />
    <MarketChartInfoCoinInfoLinks />
  </section> -->
</template>
