<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  data: {
    type: String,
    default: '0',
    required: true
  },
  highlightChange: {
    type: Boolean,
    default: false
  }
})

const prevValue = ref(Number(props.data))
const trend = ref(null) // 'up' | 'down' | null

watch(
  () => props.data,
  (newVal) => {
    if (!props.highlightChange) return
    const numericValue = Number(newVal)
    if (numericValue > prevValue.value) {
      trend.value = 'up'
    } else if (numericValue < prevValue.value) {
      trend.value = 'down'
    }
    prevValue.value = numericValue
  },
  { immediate: true }
)

const formattedData = computed(() => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Number(props.data))
})

const textClass = computed(() => {
  if (!props.highlightChange) return ''

  const numericValue = Number(props.data)

  if (numericValue < 0) return 'text-danger'

  return trend.value === 'up'
    ? 'text-success'
    : trend.value === 'down'
    ? 'text-danger'
    : ''
})
</script>

<template>
  <span :class="textClass">
    {{ formattedData }}
  </span>
</template>
