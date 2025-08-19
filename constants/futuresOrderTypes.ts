export const FUTURES_ORDER_TYPES = [
  { key: "limit", label: "Limit" },
  { key: "market", label: "Market" },
  { key: "stop-limit", label: "Stop Limit" },
  { key: "stop-market", label: "Stop Market" },
  { key: "trailing-stop", label: "Trailing Stop" },
  { key: "conditional", label: "Conditional" },
  { key: "post-only", label: "Post Only" },
  { key: "twap", label: "TWAP" },
  { key: "scaled-order", label: "Scaled Order" },
] as const;

export const FUTURES_ORDER_TYPE_KEYS = FUTURES_ORDER_TYPES.reduce((acc, item) => {
  const key = item.key.toUpperCase().replace(/-/g, "_");
  acc[key] = item.key;
  return acc;
}, {} as Record<string, string>);

export type FuturesOrderKey = (typeof FUTURES_ORDER_TYPES)[number]["key"];