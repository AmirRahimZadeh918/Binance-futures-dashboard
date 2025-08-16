<script setup>
const currencies = [
  { name: 'BTC', price: '29,000$' },
  { name: 'ETH', price: '1,800$' },
  { name: 'BNB', price: '240$' },
  { name: 'ADA', price: '0.29$' },
  { name: 'DOGE', price: '0.07$' },
  { name: 'BTC', price: '29,000$' },
  { name: 'ETH', price: '1,800$' },
  { name: 'BNB', price: '240$' },
  { name: 'ADA', price: '0.29$' },
  { name: 'DOGE', price: '0.07$' },
  { name: 'BTC', price: '29,000$' },
  { name: 'ETH', price: '1,800$' },
  { name: 'BNB', price: '240$' },
  { name: 'ADA', price: '0.29$' },
  { name: 'DOGE', price: '0.07$' },
  { name: 'BTC', price: '29,000$' },
  { name: 'ETH', price: '1,800$' },
  { name: 'BNB', price: '240$' },
  { name: 'ADA', price: '0.29$' },
  { name: 'DOGE', price: '0.07$' },
  { name: 'BTC', price: '29,000$' },
  { name: 'ETH', price: '1,800$' },
  { name: 'BNB', price: '240$' },
  { name: 'ADA', price: '0.29$' },
  { name: 'DOGE', price: '0.07$' },
];
</script>

<template>
  <div class="overflow-hidden whitespace-nowrap surface-color-primary group">
    <div
      class="flex animate-marquee group-hover:[animation-play-state:paused]"
    >
      <div
        v-for="(item, index) in [...currencies, ...currencies]"
        :key="index"
        class="flex items-center gap-2 px-4 py-1 cursor-pointer"
      >
        <span class="font-bold text-color-primary text-xs hover:opacity-60">{{ item.name }}</span>
        <span class="text-success text-xs">{{ item.price }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 150s linear infinite;
}
</style>
