<script setup>
const props = defineProps({
  data: {
    type: String,
    default: '',
    required: true
  },
  decimals: {
    type: Number,
    default: 2
  },
  highlightChange: {
    type: Boolean,
    default: false
  }
})

const textClass = computed(() => {
  if (!props.highlightChange) return ''
  const num = Number(props.data)
  if (num < 0) return 'text-red-500'
  if (num > 0) return 'text-green-500'
  return ''
})
</script>

<template>
  <div class="flex flex-row items-center" :class="textClass">
    <p>{{ Number(data).toFixed(props.decimals) }}</p>
    <span>%</span>
  </div>
</template>
