<script setup>

</script>

<template>
  <main class="grid grid-cols-12 gap-1 pt-1">
    <div class="grid grid-cols-1 gap-1 col-span-10 h-full">
      <section class="bg-red-600/0 grid grid-cols-10 gap-1">
        <div class="bg-white/0 col-span-8 flex flex-col gap-1">
          <MarketMarketTickerInfo />
          <!-- favorites -->
          <MarketChart />
        </div>
        <div class="bg-blue-300/0 col-span-2">
          <!-- order Book -->
        </div>
      </section>
      <section class="bg-red-700/0 w-full h-96">
        <!-- order place -->
      </section>
    </div>
    <section class="bg-red-400/0 col-span-2">
      <!-- order wizard -->
    </section>
  </main>
</template>
