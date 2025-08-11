<script setup>
const props = defineProps({
  data: {
    type: String,
    default: '0',
    required: true
  },
  highlightChange: {
    type: Boolean,
    default: false
  },
  highlightSign: {
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
    } else {
      trend.value = null
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
  const numericValue = Number(props.data)

  if (!props.highlightChange && !props.highlightSign) return ''

  if (props.highlightSign) {
    if (numericValue > 0) return 'text-success'
    if (numericValue < 0) return 'text-danger'
    return ''
  }

  if (props.highlightChange) {
    if (trend.value === 'up') return 'text-success'
    if (trend.value === 'down') return 'text-danger'
    return ''
  }

  return ''
})

</script>

<template>
  <span :class="textClass">
    {{ formattedData }}
  </span>
</template>
