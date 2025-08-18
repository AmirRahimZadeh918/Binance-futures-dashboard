<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useBinanceTicker } from '@/composables/services/marketData/useBinanceTicker'

const { tickers } = useBinanceTicker() // اینجا همه‌ی مدیریت دیتا تو composable انجام شده

const marqueeRef = ref<HTMLElement | null>(null)
let scrollPos = 0
let animationId: number | null = null
const speed = 0.2
let isPaused = false

const scrollMarquee = () => {
  if (!marqueeRef.value) return
  if (!isPaused) {
    const container = marqueeRef.value
    scrollPos += speed
    if (scrollPos >= container.scrollWidth / 2) scrollPos = 0
    container.style.transform = `translateX(-${scrollPos}px)`
  }
  animationId = requestAnimationFrame(scrollMarquee)
}

onMounted(() => {
  if (marqueeRef.value) animationId = requestAnimationFrame(scrollMarquee)
})

onBeforeUnmount(() => {
  if (animationId) cancelAnimationFrame(animationId)
})

const onMouseEnter = () => { isPaused = true }
const onMouseLeave = () => { isPaused = false }
</script>

<template>
  <div 
    class="overflow-hidden whitespace-nowrap surface-color-primary border-t-4 border-background-light dark:border-background-dark"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div
      ref="marqueeRef"
      class="flex"
      style="display: inline-flex;"
    >
      <template v-for="item in [...tickers, ...tickers]" :key="item.symbol">
        <div class="flex items-center gap-1 px-4 py-1 cursor-pointer">
          <shared-base-text :text="item.symbol" class="font-thin text-color-primary text-xs hover:opacity-60" />
          <shared-live-percent :data="item.changePercent" :highlight-change="true" class="text-[12px]" />
          <shared-live-price :data="item.lastPrice" :decimal="4" class="text-[12px] text-color-secondary" />
        </div>
      </template>
    </div>
  </div>
</template>