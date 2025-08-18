<script setup lang="ts">
const props = defineProps({
  type: { type: String, default: 'text' },
  dir: { type: String, default: 'rtl' },
  id: { type: String, required: true },
  name: { type: String, required: true },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  maxlength: { type: [String, Number], default: '' },
  seperateNumbers: { type: Boolean, default: true },
  autofocus: { type: Boolean, default: false },
  autocomplete: { type: String, default: 'off' },
  disabled: { type: Boolean, default: false },
  requiredStar: { type: Boolean, default: false },
  eyeColor: { type: String, default: '' },
})

const model = defineModel({ type: [String, Number] })
const emits = defineEmits(['modelUpdate'])

const computedInputType = computed(() => {
  if (props.seperateNumbers) return 'text'
  return props.type
})

const Correction = (event: KeyboardEvent) => {
  const persianRegex = /[\u0600-\u06FF\u0750-\u077F]/
  const maxLength = props.maxlength
  const key = event.key

  switch (props.type.toLowerCase()) {
    case 'number':
    case 'tel':
      if (!/^\d$/.test(key) || (maxLength && String(model.value || '').length >= maxLength)) {
        event.preventDefault()
      }
      break
    case 'text-only':
      if (/[0-9]/.test(key)) event.preventDefault()
      break
    case 'email':
    case 'link':
    case 'password':
      if (persianRegex.test(key)) event.preventDefault()
      break
    case 'username':
      if (key === ' ') event.preventDefault()
      break
  }
}

const displayValue = ref('')

watch(
  model,
  (val) => {
    if (props.seperateNumbers && val !== null && val !== undefined) {
      displayValue.value = String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    } else {
      displayValue.value = val ?? ''
    }
  },
  { immediate: true }
)

const onInput = (event: Event) => {
  const el = event.target as HTMLInputElement
  let numericValue = el.value.replace(/,/g, '')
  model.value = numericValue
  emits('modelUpdate', numericValue)

  if (props.seperateNumbers) {
    el.value = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
}
</script>

<template>
  <div class="flex w-full flex-col gap-1">

    <label :for="props.id" class="label">
      {{ props.label }}
      <span v-if="props.requiredStar" class="text-danger">*</span>
    </label>

    <div class="relative">
      <input
        :id="props.id"
        :dir="props.dir"
        :type="computedInputType"
        :placeholder="props.placeholder"
        :autofocus="props.autofocus"
        :autocomplete="props.autocomplete"
        :maxlength="props.maxlength"
        :disabled="props.disabled"
        class="input"
        :value="displayValue"
        @input="onInput"
        @keypress="Correction"
      />
    </div>
  </div>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
