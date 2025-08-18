export const useBinanceTicker = () => {
  const tickers = ref<any[]>([])
  const fixedTickers = ref<any[]>([])
  let ws: WebSocket | null = null

  const connect = () => {
    ws = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr')

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
        .filter((item: any) => item.s.endsWith('USDT'))

      if (fixedTickers.value.length === 0) {
        fixedTickers.value = data.map((item: any) => ({
          symbol: item.s,
          lastPrice: parseFloat(item.c),
          changePercent: parseFloat(item.P)
        }))
      } else {
        const map = new Map(data.map(item => [item.s, item]))
        fixedTickers.value.forEach(item => {
          const updated = map.get(item.symbol)
          if (updated) {
            item.lastPrice = parseFloat(updated.c)
            item.changePercent = parseFloat(updated.P)
          }
        })
      }

      tickers.value = fixedTickers.value
    }

    ws.onclose = () => setTimeout(connect, 1000)
  }

  onMounted(connect)
  onBeforeUnmount(() => ws?.close())

  return { tickers }
}
