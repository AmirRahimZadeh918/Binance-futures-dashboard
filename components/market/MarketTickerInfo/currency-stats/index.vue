<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: {},
  }
})
</script>

<template>
  <div class="flex flex-col justify-start items-start">
    <SharedLivePrice :data="props.data?.lastPrice" :highlight-change="true" class="text-xl font-medium" />
    <div class="flex flex-row items-center justify-between gap-2 w-full">
      <SharedLivePrice
        :data="props.data?.priceChangeDollor"
        :highlight-change="true"
        class="text-xs font-medium"
      />
      <SharedLivePercent
        :data="props.data?.priceChangePercent"
        :highlight-change="true"
        class="text-xs font-medium"
      />
    </div>
  </div>
</template>
