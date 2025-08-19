<script setup>
const percent = ref()
</script>

<template>
    <div class="flex flex-col gap-1 border-b-[1px] border-color-secondary">
        <SharedInputsText type="number" :label="APP_TEXTS.LABELS.PRICE" />
        <SharedInputsText type="number" :label="APP_TEXTS.LABELS.SIZE" v-model="percent" />
        <SharedRangeSlider v-model="percent" class="mt-6" />
    </div>
</template>