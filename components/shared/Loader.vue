<template>
  <div class="binance-loader">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<style scoped>
.binance-loader {
  --uib-size: 40px;
  --uib-color: #F3BA2F; /* رنگ برند Binance */
  --uib-speed: 1s;
  --uib-stroke: 4px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--uib-size);
  height: calc(var(--uib-size) * 0.9);
}

.bar {
  background-color: var(--uib-color);
  width: var(--uib-stroke);
  height: 100%;
  border-radius: 2px;
}

.bar:nth-child(1) {
  animation: grow var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.45) infinite;
}

.bar:nth-child(2) {
  animation: grow var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.3) infinite;
}

.bar:nth-child(3) {
  animation: grow var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.15) infinite;
}

.bar:nth-child(4) {
  animation: grow var(--uib-speed) ease-in-out infinite;
}

@keyframes grow {
  0%, 100% {
    transform: scaleY(0.3);
  }

  50% {
    transform: scaleY(1);
  }
}
</style>
