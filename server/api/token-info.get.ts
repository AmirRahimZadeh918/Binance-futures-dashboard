import { defineEventHandler, getQuery } from 'h3'
import axios from 'axios'

export default defineEventHandler(async (event) => {
  const { symbol } = getQuery(event)

  const res = await axios.get(
    'https://www.binance.com/bapi/apex/v1/friendly/apex/marketing/web/token-info',
    {
      params: { symbol },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': 'application/json, text/plain, */*',
      },
    }
  )

  return res.data
})
