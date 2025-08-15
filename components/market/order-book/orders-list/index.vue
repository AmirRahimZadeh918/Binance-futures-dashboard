<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
    required: true,
  },
});
const store = useLivePriceStore();
import { useOrderBookSocket } from '@/composables/services/marketData/useOrderBookSocket'

const { bids, asks } = useOrderBookSocket(10)
</script>

<template>
  <div class="flex flex-col gap-2 h-full">
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
        <MarketOrderBookOrdersListBids v-if="bids" :data="bids" />
      </div>

      <div class="flex justify-start items-center gap-4">
        <SharedLivePrice
          class="text-xl"
          :data="store.lastPrice"
          :color-transition="false"
          :highlight-change="true"
          :highlight-arrow="true"
        />
        <SharedLivePrice
          class="text-sm text-color-secondary"
          :data="store.lastPrice"
        />
      </div>

      <div class="flex flex-col">
        <MarketOrderBookOrdersListAsks v-if="asks" :data="asks" />
      </div>
    </div>
  </div>
</template>
