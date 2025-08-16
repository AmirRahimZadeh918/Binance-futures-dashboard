<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <transition name="fade">
    <div
      v-if="props.show"
      class="flex justify-center surface-color-secondary rounded-lg"
    ></div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
