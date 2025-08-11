<script setup>
import axios from 'axios'
const props = defineProps({
  symbol: { type: String, required: true, default: 'LINKUSDT' }
})

const stats = ref(null)
let ws = null

const mapWsDataToStandard = (wsData) => ({
  lastPrice: wsData.c,
  index: wsData.c,
  funding: wsData.Q,
  highPrice: wsData.h,
  lowPrice: wsData.l,
  volume: wsData.v,
  volumeUSDT: wsData.q,
  openPrice: wsData.o,
  symbol: wsData.s,
  openInterestUSDT: wsData.L,
  priceChangePercent: wsData.P,
  priceChangeDollor: wsData.p,
})

const fetchInitial = async () => {
  try {
    const res = await axios.get(`https://fapi.binance.com/fapi/v1/ticker/24hr?symbol=${props.symbol}`)
    stats.value = res.data
  } catch (error) {
    console.error('Error fetching initial data:', error)
  }
}

const initWebSocket = () => {
  ws = new WebSocket(`wss://fstream.binance.com/ws/${props.symbol.toLowerCase()}@ticker`)

  ws.onmessage = (event) => {
    try {
      const rawData = JSON.parse(event.data)
      stats.value = mapWsDataToStandard(rawData)
    } catch (error) {
      console.error('Error parsing websocket data:', error)
    }
  }
}

onMounted(() => {
  fetchInitial()
  initWebSocket()
})
</script>

<template>
    <div class="flex flex-row gap-8 surface-color-primary w-full rounded-sm px-4 py-3 relative overflow-hidden">
        <div class="flex flex-col lg:flex-row items-center gap-8">
            <MarketMarketTickerInfoCurrencySwitcher />
            <MarketMarketTickerInfoCurrencyStats :data="stats"/>
        </div>
        <MarketMarketTickerInfoCurrencyOverview :data="stats" />
        <div class="surface-color-primary">
            <SharedIconRenderer name="elipisese" extention="svg" class="text-color-secondary w-4 cursor-pointer absolute right-5 top-7" />
        </div>
    </div>
</template>