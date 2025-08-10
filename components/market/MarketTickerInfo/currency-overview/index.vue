<script setup>
const data = ref([
    {
        label: 'Mark',
        value: '118704.4',
        isPrice: true,
    },
    {
        label: 'Index',
        value: '118704.4',
        isPrice: true,
    },
    {
        label: 'Funding',
        value: '118704.4',
        isPrice: true,
    },
    {
        label: 'Countdown',
        value: '118704.4',
        isPrice: true,
    },
    {
        label: '24h High',
        value: '118704.4',
        isPrice: true,
    },
    {
        label: '24h Low',
        value: '118704.4',
        isPrice: true,
    },
    {
        label: '24h Volume(BTC)',
        value: '118704.4',
        isPrice: true,
    },
    {
        label: '24h Volume(USDT)',
        value: '118704.4',
        isPrice: true,
    },
    {
        label: 'Open Intrest(USDT)',
        value: '118704.4',
        isPrice: true,
    },
])
</script>

<template>
    <div class="flex flex-row items-center gap-4 ">
        <div v-for="item in data" class="flex flex-col items-start">
            <SharedBaseText :text="item.label" variant="secondary" class="text-sm font-medium" />
            <SharedLivePrice v-if="item.isPrice" :data="item.value" class="text-xs font-medium" />
            <SharedBaseText v-else :text="item.value" class="text-xs font-medium" />
        </div>
    </div>
</template>