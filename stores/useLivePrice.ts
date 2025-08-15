import { defineStore } from 'pinia'

export const useLivePriceStore = defineStore('livePrice', {
  state: () => ({
    lastPrice: '0',
  }),
  actions: {
    setLastPrice(price: string) {
      this.lastPrice = price
    }
  }
})
