import axios from 'axios'

const FUTURES_BASE_URL = 'https://fapi.binance.com/fapi/v1'
const TOKEN_INFO_BASE_URL = 'https://www.binance.com/bapi/apex/v1'

export const useMarketDataApi = () => {
  const futuresInstance = axios.create({
    baseURL: FUTURES_BASE_URL,
    timeout: 5000,
  })
  const tokenInfoInstance = axios.create({
    baseURL: TOKEN_INFO_BASE_URL,
    timeout: 5000,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      'Accept': 'application/json, text/plain, */*',
    },
  })

  return {
    get24hTicker: (symbol: string) => futuresInstance.get(`/ticker/24hr`, { params: { symbol } }),
    getTokenInfo: (symbol: string) => $fetch('/api/token-info', { params: { symbol } })
  }
}
