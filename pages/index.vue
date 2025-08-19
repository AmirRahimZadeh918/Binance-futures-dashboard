<script setup></script>

<template>
  <main class="flex flex-col gap-1 overflow-x-hidden">
    <section class="grid grid-cols-12 gap-1 pt-1">
      <div class="grid grid-cols-1 gap-1 col-span-10 h-full">
        <div class="grid grid-cols-10 gap-1">
          <div class="col-span-8 flex flex-col gap-1">
            <MarketMarketTickerInfo />
            <!-- favorites -->
            <MarketChart />
          </div>
          <div class="col-span-2">
            <MarketOrderBook />
          </div>
        </div>
      </div>
      <div class="flex flex-col col-span-2">
        <MarketOrderActionsPanel />
      </div>
    </section>
    <section class="grid grid-cols-12 surface-color-primary gap-1 h-96 color-transition">

    </section>
  </main>
</template>
