<script setup>

</script>

<template>
    <div class="flex flex-row items-center h-full gap-3">
        <SharedFavoriteToggle />
        <div class="flex flex-row items-center gap-2 cursor-pointer">
            <SharedAssetIcon name="btc" />
            <SharedBaseText text="BTCUSDT" class="text-xl font-medium" />
            <span class="surface-color-secondary px-2 rounded-sm -ml-1">
                <SharedBaseText text="Prep" class="text-xs" />
            </span>
            <SharedIconRenderer name="arrow-down" extention="svg" class="text-color-secondary w-5" />
        </div>
    </div>  
</template>