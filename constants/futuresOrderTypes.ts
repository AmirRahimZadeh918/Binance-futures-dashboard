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
