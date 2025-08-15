import axios from 'axios'

const BASE_URL = 'https://fapi.binance.com/fapi/v1'

export const useMarketDataApi = () => {
  const Instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
  })

  return {
    get24hTicker: (symbol: string) => Instance.get(`/ticker/24hr`, { params: { symbol } }),
    getOrderBook: (symbol: string, limit = 1000) => Instance.get(`/depth`, { params: { symbol, limit } }),
    // getTokenInfo: (symbol: string) => $fetch('/api/token-info', { params: { symbol } })
  }
}
