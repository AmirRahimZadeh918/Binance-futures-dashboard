<template>
  <div id="tradingview" style="height: 500px"></div>
</template>

<script setup>
const { isDark } = useTheme();

const initWidget = () => {
  if (!window.TradingView) return;

  const container = document.getElementById("tradingview");
  if (container) container.innerHTML = "";

  new window.TradingView.widget({
    container_id: "tradingview",
    symbol: "BINANCE:BTCUSDT",
    interval: "60",
    theme: isDark.value ? THEMES.DARKMODE : THEMES.LIGHTMODE,
    style: "1",
    locale: "en",
    autosize: true,
  });
};

const loadScript = (callback) => {
  if (document.querySelector('script[src="https://s3.tradingview.com/tv.js"]')) {
    callback();
    return;
  }
  const script = document.createElement("script");
  script.src = "https://s3.tradingview.com/tv.js";
  script.onload = callback;
  document.body.appendChild(script);
};

onMounted(() => {
  loadScript(initWidget);
});

watch(isDark, () => {
  initWidget();
});
</script>
