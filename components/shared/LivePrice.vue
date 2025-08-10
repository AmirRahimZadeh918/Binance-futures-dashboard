<script setup>
const props = defineProps({
  data: {
    type: Number,
    required: true
  }
})

const formattedData = computed(() => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(props.data)
})
</script>

<template>
  <span>{{ formattedData }}</span>
</template>
