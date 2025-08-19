<script setup>
const activeTab = ref(FUTURES_ORDER_TYPE_KEYS.LIMIT);
</script>

<template>
    <div class="flex flex-col gap-4 surface-color-primary rounded-md w-full h-full color-transition p-4">
        <MarketOrderActionsPanelOrderControlsBar />

        <MarketOrderActionsPanelOrderTypeSwitcher v-model="activeTab" />

        <MarketOrderActionsPanelOrderTypes :active-tab="activeTab" />
    </div>
</template>