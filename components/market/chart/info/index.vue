<script setup>
const tabs = ref([
  {
    key: "coin-info",
    label: "Coin Info",
  },
  {
    key: "trading-rules",
    label: "Trading Rules",
  },
  {
    key: "leverage-margin",
    label: "Leverage & Margin",
  },
  {
    key: "funding-history",
    label: "Funding History",
  },
]);

const activeTab = ref("coin-info");
const setActiveTab = (key) => {
  activeTab.value = key;
};
</script>

<template>
  <section class="flex flex-col justify-start gap-4 p-4 h-full">
    <div class="flex flex-row">
      <SharedActionButton
        v-for="tab in tabs"
        :key="tab.key"
        :active="activeTab === tab.key"
        @click="setActiveTab(tab.key)"
      >
        {{ tab.label }}
      </SharedActionButton>
    </div>

    <div class="h-full">
      <MarketChartInfoCoinInfo v-if="activeTab === tabs[0].key" />
      <MarketChartInfoTradingRules v-if="activeTab === tabs[1].key" />
      <MarketChartInfoLeverageMargin v-if="activeTab === tabs[2].key" />
      <MarketChartInfoFundingHistory v-if="activeTab === tabs[3].key" />
    </div>
  </section>
</template>
