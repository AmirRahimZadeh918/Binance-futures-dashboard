import { ref, onMounted, onBeforeUnmount } from "vue";

export interface useMarketDataSocket {
  lastPrice: string;
  index: string;
  funding: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  volumeUSDT: string,
  openPrice: string;
  symbol: string;
  openInterestUSDT: string,
  priceChangePercent: string;
  priceChangeDollor: string;
}

export const useMarketDataSocket = (symbol: string) => {
  const stats = ref<useMarketDataSocket | null>(null);
  let ws: WebSocket | null = null;

  const mapWsDataToStandard = (wsData: any): useMarketDataSocket => ({
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
  });

  const connect = () => {
    ws = new WebSocket(
      `wss://fstream.binance.com/ws/${symbol.toLowerCase()}@ticker`
    );

    ws.onmessage = (event) => {
      try {
        const rawData = JSON.parse(event.data);
        stats.value = mapWsDataToStandard(rawData);
      } catch (error) {
        console.error("WebSocket data parse error:", error);
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  };

  onMounted(() => connect());

  onBeforeUnmount(() => {
    if (ws) {
      ws.close();
      ws = null;
    }
  });

  return {
    stats,
  };
};
