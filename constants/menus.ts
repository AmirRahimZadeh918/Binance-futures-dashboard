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
    items: [],
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
    items: [],
  },
  {
    key: "data",
    title: "Data",
    items: [],
  },
  {
    key: "more",
    title: "More",
    items: [],
  },
] as const;
