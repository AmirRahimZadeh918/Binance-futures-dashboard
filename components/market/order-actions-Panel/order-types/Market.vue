<script setup>

</script>

<template>
    <div class="flex flex-col gap-1 border-b-[1px] border-color-secondary">
        <SharedInputsText type="number" :label="APP_TEXTS.LABELS.SIZE" />
        <SharedRangeSlider class="mt-6" />
    </div>
</template>