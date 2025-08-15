export const MARKET_DEPTH_TYPE = {
  BOTH: "bid&Ask",
  BID: "bid",
  ASK: "ask",
} as const;

export const MARKET_DEPTH_LEVELS = {
  LOW: 5,
  MID: 10,
  HIGH: 20,
} as const;