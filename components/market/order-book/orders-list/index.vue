<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
    required: true,
  },
});
const store = useLivePriceStore();
</script>

<template>
  <div class="flex flex-col gap-0 h-full">
    <div class="grid grid-cols-4">
      <SharedBaseText
        text="Price (USDT)"
        class="text-color-secondary font-semibold font-italic text-xs col-span-2 tracking-wider"
      />
      <SharedBaseText
        text="Size (BTC)"
        class="text-color-secondary font-semibold font-italic text-xs col-span-1 tracking-wider"
      />
      <SharedBaseText
        text="Sum (BTC)"
        class="text-color-secondary font-semibold font-italic text-xs col-span-1 tracking-wider text-right"
      />
    </div>
    <div class="flex flex-col justify-between h-full">
      <div class="flex flex-col">
        <MarketOrderBookOrdersListBids v-if="data" :data="data.bids" />
      </div>

      <div class="flex justify-start items-center">
        <SharedLivePrice
          class="text-xl"
          :data="store.lastPrice"
          :color-transition="false"
          :highlight-change="true"
          :highlight-arrow="true"
        />
      </div>

      <div class="flex flex-col">
        <MarketOrderBookOrdersListAsks v-if="data" :data="data.asks" />
      </div>
    </div>
  </div>
</template>
