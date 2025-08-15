import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useSymbol } from '@/composables/logic/useSymbol'

export const useOrderBookSocket = (levels = 10) => {
  const { currentSymbol } = useSymbol()
  const bids = ref<any[]>([])
  const asks = ref<any[]>([])
  let ws: WebSocket | null = null

  const connect = () => {
    const symbol = currentSymbol.value.toLowerCase()
    ws = new WebSocket(`wss://fstream.binance.com/ws/${symbol}@depth${levels}`)

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        if (data.b) bids.value = data.b
        if (data.a) asks.value = data.a
      } catch (err) {
        console.error('OrderBook WS parse error', err)
      }
    }

    ws.onerror = (err) => {
      console.error('OrderBook WS error', err)
    }
  }

  onMounted(() => connect())

  watch(currentSymbol, () => {
    if (ws) {
      ws.close()
      ws = null
    }
    connect()
  })

  onBeforeUnmount(() => {
    if (ws) {
      ws.close()
      ws = null
    }
  })

  return {
    bids,
    asks
  }
}
