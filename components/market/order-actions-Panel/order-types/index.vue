<script setup lang="ts">
import Limit from "./Limit.vue";
import Market from "./Market.vue";
import StopLimit from "./StopLimit.vue";
import StopMarket from "./StopMarket.vue";
import TrailingStop from "./TrailingStop.vue";
import Conditional from "./Conditional.vue";
import PostOnly from "./PostOnly.vue";
import TWAP from "./TWAP.vue";
import ScaledOrder from "./ScaledOrder.vue";

const props = defineProps({
  activeTab: {
    type: String,
    required: true,
  },
});

const tabComponents = {
  [FUTURES_ORDER_TYPE_KEYS.LIMIT]: Limit,
  [FUTURES_ORDER_TYPE_KEYS.MARKET]: Market,
  [FUTURES_ORDER_TYPE_KEYS.STOP_LIMIT]: StopLimit,
  [FUTURES_ORDER_TYPE_KEYS.STOP_MARKET]: StopMarket,
  [FUTURES_ORDER_TYPE_KEYS.TRAILING_STOP]: TrailingStop,
  [FUTURES_ORDER_TYPE_KEYS.CONDITIONAL]: Conditional,
  [FUTURES_ORDER_TYPE_KEYS.POST_ONLY]: PostOnly,
  [FUTURES_ORDER_TYPE_KEYS.TWAP]: TWAP,
  [FUTURES_ORDER_TYPE_KEYS.SCALED_ORDER]: ScaledOrder,
};

const currentComponent = computed(() => tabComponents[props.activeTab]);
</script>

<template>
  <component :is="currentComponent" />
</template>
