import axios from 'axios'

const BASE_URL = 'https://fapi.binance.com/fapi/v1'

export const useMarketDataApi = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
  })

  return {
    get24hTicker: (symbol: string) => instance.get(`/ticker/24hr`, { params: { symbol } }),
  }
}
