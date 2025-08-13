export const useCurrentSymbol = defineStore('symbol', {
  state: () => ({
    currentSymbol: 'BTCUSDT',
  }),
  actions: {
    setSymbol(symbol: string) {
      this.currentSymbol = symbol
    }
  }
})
