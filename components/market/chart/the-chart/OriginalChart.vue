<script setup lang="ts">
// Props برای سفارشی کردن
defineProps<{
  symbol?: string; // نماد ارز مثل BTCUSDT
  theme?: "light" | "dark"; // تم چارت
  interval?: string; // تایم فریم مثل 1m, 1h, 1d
}>();
</script>

<template>
  <iframe
    :src="`https://www.binance.com/en/trade/${symbol}?theme=${theme}&interval=${interval}`"
    frameborder="0"
    allowfullscreen
    class="w-full h-full rounded-lg"
  ></iframe>
</template>
