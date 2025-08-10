<script setup>

</script>

<template>
    <div class="flex flex-row gap-8 surface-color-primary w-full rounded-sm px-4 py-3">
        <div class="flex flex-col lg:flex-row items-center gap-8">
            <MarketMarketTickerInfoCurrencySwitcher />
            <MarketMarketTickerInfoCurrencyStats />
        </div>
        <MarketMarketTickerInfoCurrencyOverview />
    </div>
</template>