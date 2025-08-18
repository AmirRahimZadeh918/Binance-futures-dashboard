<script setup>
const props = defineProps({
  show: { type: Boolean, default: false },
  text: { type: String, default: "" },
  isPercent: { type: Boolean, default: false }
});
</script>

<template>
  <div class="relative flex items-center">
    <slot />
    <transition name="fade">
      <div
        v-if="props.show"
        class="absolute z-50 px-1 py-0.5 text-xs surface-color-secondary text-color-primary rounded-md whitespace-nowrap"
      >
        {{ text + ' ' + (isPercent ? '%' : '') }}
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
