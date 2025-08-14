<script setup>
const props = defineProps({
  as: {
    type: String,
    default: "button", // "link" or "button"
  },
  href: {
    type: String,
    default: null, // use when as=link
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);
</script>

<template>
  <component
    :is="as"
    :href="as === 'link' ? href : null"
    :disabled="as === 'button' ? disabled : null"
    @click="$emit('click')"
    class="px-2 py-1 text-xs rounded-md font-normal tracking-wide color-transition"
    :class="[
      active 
        ? 'text-color-primary surface-color-secondary' 
        : 'text-color-secondary hover:text-color-primary hover:surface-color-secondary',
      disabled && 'opacity-50 cursor-not-allowed'
    ]"
  >
    <slot />
  </component>
</template>
