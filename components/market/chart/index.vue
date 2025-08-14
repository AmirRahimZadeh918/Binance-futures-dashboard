<script setup>
const activeTab = ref("chart");
const tabs = ref([
  {
    key: "chart",
    label: "Chart",
  },
  {
    key: "info",
    label: "Info",
  },
  {
    key: "tradingData",
    label: "Trading Data",
  },
]);

const fullScreenChart = ref(false);
</script>

<template>
  <div
    class="w-full surface-color-primary color-transition flex flex-col justify-start rounded-sm"
    :class="fullScreenChart ? 'full-screen' : 'h-[550px]'"
  >
    <div
      class="flex justify-between items-center w-full border-b border-color-secondary px-2"
    >
      <SharedTabs :items="tabs" v-model="activeTab" />
      <div class="flex flex-row">
        <SharedIconRenderer
          @click="fullScreenChart = !fullScreenChart"
          :name="fullScreenChart ? 'minimize' : 'maximize'"
          :key="fullScreenChart"
          extention="svg"
          class="w-4 text-color-secondary hover:text-color-primary color-transition cursor-pointer mx-2"
        />
      </div>
    </div>
    <MarketChartTheChart v-if="activeTab === tabs[0].key" />
    <MarketChartInfo v-if="activeTab === tabs[1].key" />
    <MarketChartTradingData v-if="activeTab === tabs[2].key" />
  </div>
</template>
