export const MENUS = [
  {
    key: "futures",
    title: "Futures",
    items: [
      {
        key: "usdt-prepetual",
        title: "USDT Prepetual",
        subItems: [
          {
            key: "btc",
            title: "BTCUSDT",
            icon: "btc",
          },
        ],
      },
      {
        key: "usdc-prepetual",
        title: "USDC Prepetual",
        subItems: [
          {
            key: "btc",
            title: "BTCUSDT",
            icon: "btc",
          },
          {
            key: "btc",
            title: "BTCUSDT",
            icon: "btc",
          },
          {
            key: "btc",
            title: "BTCUSDT",
            icon: "btc",
          },
        ],
      },
      {
        key: "usdt-delivery",
        title: "USDT Delivery",
        subItems: [
          {
            key: "btc",
            title: "BTCUSDT",
            icon: "btc",
          },
        ],
      },
      {
        key: "coin-m-prepetual",
        title: "COIN-M Prepetual",
        subItems: [
          {
            key: "btc",
            title: "BTCUSDT",
            icon: "btc",
          },
        ],
      },
      {
        key: "coin-m-delivery",
        title: "COIN-M Delivery",
        subItems: [
          {
            key: "btc",
            title: "BTCUSDT",
            icon: "btc",
          },
        ],
      },
    ],
  },
  {
    key: "options",
    title: "Options",
    items: [
      {
        key: "options-home",
        title: "Options Home",
        subItems: null,
      },
      {
        key: "classic-options",
        title: "Clasic Options",
        subItems: [
          {
            key: "btc",
            title: "BTCUSDT",
            icon: "btc",
          },
        ],
      },
      {
        key: "easy-options",
        title: "Easy Options",
        subItems: null,
      },
      {
        key: "options-RFQ",
        title: "Options RFQ",
        subItems: null,
      },
      {
        key: "block",
        title: "Block",
        subItems: null,
      },
    ],
  },
  {
    key: "trading-bots",
    title: "Trading Bots",
    items: [
      {
        key: "overview",
        title: "Overview",
        subItems: null,
      },
      {
        key: "spot-grid",
        title: "Spot Grid",
        subItems: null,
      },
      {
        key: "futures-grid",
        title: "Futures Grid",
        subItems: null,
      },
      {
        key: "arbitrage-bot",
        title: "Arbitrage Bot",
        subItems: null,
      },
      {
        key: "rebalancing-bot",
        title: "Rebalancing Bot",
        subItems: null,
      },
      {
        key: "spot-dca",
        title: "Spot DCA",
        subItems: null,
      },
      {
        key: "twap",
        title: "TWAP",
        subItems: null,
      },
    ],
  },
  {
    key: "copy-trading",
    title: "Copy Trading",
    items: null,
  },
  {
    key: "smart-money",
    title: "Smart Money",
    items: null,
  },
  {
    key: "campaigns",
    title: "Campaigns",
    items: null,
  },
  {
    key: "data",
    title: "Data",
    items: [
      {
        key: "markets",
        title: "Markets",
        subItems: null,
      },
      {
        key: "future-data",
        title: "Futures Data",
        subItems: [
          {
            key: "trading-data",
            title: "Trading Data",
            icon: null,
          },
          {
            key: "realtime-funding-rate",
            title: "Real-Time Funding Rate",
            icon: null,
          },
          {
            key: "funding-rate-history",
            title: "Funding Rate History",
            icon: null,
          },
          {
            key: "insurance-fund-history",
            title: "Insurance Fund History",
            icon: null,
          },
          {
            key: "index",
            title: "Index",
            icon: null,
          },
          {
            key: "arbitrage-data",
            title: "Arbitrage Data",
            icon: null,
          },
          {
            key: "delivery-data",
            title: "Delivery Data",
            icon: null,
          },
        ],
      },
      {
        key: "options-data",
        title: "Options Data",
        subItems: [
          {
            key: "option-data-overview",
            title: "Option Data Overview",
            icon: null,
          },
          {
            key: "open-intrest-&-volume",
            title: "Open Intrest & Volume",
            icon: null,
          },
          {
            key: "impiled-volatility",
            title: "Impiled Volatility",
            icon: null,
          },
          {
            key: "max-pain",
            title: "Max Pain",
            icon: null,
          },
          {
            key: "exercised-history",
            title: "Exercised History",
            icon: null,
          },
          {
            key: "volatility-index",
            title: "Volatility Index",
            icon: null,
          },
        ],
      },
      {
        key: "heatmap",
        title: "Heatmap",
        subItems: null,
      },
    ],
  },
  {
    key: "more",
    title: "More",
    items: [
      {
        key: "faq",
        title: "FAQ",
        subItems: null,
      },
      {
        key: "learn",
        title: "Learn",
        subItems: [],
      },
      {
        key: "trading-rules",
        title: "Trading Rules",
        subItems: null,
      },
      {
        key: "futures-referral",
        title: "Futures Referral",
        subItems: null,
      },
      {
        key: "api-access",
        title: "API Access",
        subItems: null,
      },
      {
        key: "portfolio-margin",
        title: "Portfolio Margin",
        subItems: null,
      },
      {
        key: "spot-trading",
        title: "Spot Trading",
        subItems: null,
      },
    ],
  },
] as const;
