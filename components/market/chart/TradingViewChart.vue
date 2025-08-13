<template>
  <div id="tradingview" style="height: 100%"></div>
</template>

<script setup>
const { isDark } = useTheme();
const { currentSymbol } = useSymbol();

const initWidget = () => {
  if (!window.TradingView) return;

  const container = document.getElementById("tradingview");
  if (container) container.innerHTML = "";

  new window.TradingView.widget({
    container_id: "tradingview",
    symbol: `BINANCE:${currentSymbol.value}`,
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

watch(currentSymbol, (newSymbol, oldSymbol) => {
  if (newSymbol !== oldSymbol) initWidget();
});

watch(isDark, (newVal, oldVal) => {
  if (newVal !== oldVal) initWidget();
});

</script>
