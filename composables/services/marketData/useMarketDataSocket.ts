import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { useSymbol } from "@/composables/logic/useSymbol";

export interface useMarketDataSocket {
  lastPrice: string;
  index: string;
  funding: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  volumeUSDT: string;
  openPrice: string;
  symbol: string;
  openInterestUSDT: string;
  priceChangePercent: string;
  priceChangeDollor: string;
}

export const useMarketDataSocket = () => {
  const { currentSymbol } = useSymbol();
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
    ws = new WebSocket(`wss://fstream.binance.com/ws/!ticker@arr`);

    ws.onmessage = (event) => {
      try {
        const rawData = JSON.parse(event.data);
        const ticker = rawData.find((t: any) => t.s === currentSymbol.value);
        if (ticker) {
          stats.value = mapWsDataToStandard(ticker);
        }
      } catch (error) {
        console.error("WebSocket data parse error:", error);
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  };

  onMounted(() => connect());

  watch(currentSymbol, () => {
    stats.value = null;
  });

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
