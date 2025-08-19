<script setup lang="ts">
const props = defineProps({
  modelValue: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  steps: { type: Array as () => number[], default: () => [0, 25, 50, 75, 100] },
});

const emit = defineEmits(["update:modelValue"]);

const value = ref(props.modelValue);
const showToolTip = ref(false);

watch(value, (val) => {
  emit("update:modelValue", val);
});

watch(
  () => props.modelValue,
  (val) => {
    value.value = val;
  }
);
</script>

<template>
  <div class="w-full flex flex-col gap-2 px-1">
    <div class="relative w-full">
      <div class="h-0.5 surface-color-secondary rounded-full relative">
        <div
          class="h-0.5 bg-surface-dark-primary dark:bg-surface-light-primary rounded-full pointer-events-none"
          :style="{ width: value + '%' }"
        ></div>

        <div
          v-for="step in steps"
          :key="step"
          class="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45"
          :class="
            step <= value
              ? 'bg-surface-dark-primary dark:bg-surface-light-primary'
              : 'surface-color-primary border-[1px] border-color-secondary'
          "
          :style="{ left: step + '%' }"
        ></div>
      </div>

      <div class="relative w-full h-6">
        <input
          @mouseenter="showToolTip = true"
          @mouseleave="showToolTip = false"
          type="range"
          min="0"
          :max="props.max"
          step="1"
          v-model="value"
          class="range-slider absolute -top-[7px] w-full h-3 cursor-pointer bg-transparent"
        />
        <shared-tooltip
          :show="showToolTip"
          :is-percent="true"
          :text="value"
          class="absolute -top-7"
          :style="{
            left: `${(value / props.max) * 100}%`,
            transform: 'translateX(-3%)',
          }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Thumb Styling */
.range-slider {
  -webkit-appearance: none;
  background: transparent;
}
.range-slider:focus {
  outline: none;
}
.range-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 11px;
  height: 11px;
  border-radius: 0%;
  rotate: 45deg;
  border: 1.5px solid white;
  background: #181a20;
  cursor: pointer;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  transition: 0.2s;
}
.range-slider::-moz-range-thumb {
  width: 11px;
  height: 11px;
  border-radius: 0%;
  border: 1.5px solid white;
  background: #181a20;
  cursor: pointer;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  transition: 0.2s;
}
.range-slider::-ms-thumb {
  width: 11px;
  height: 11px;
  border-radius: 0%;
  border: 1.5px solid white;
  background: #181a20;
  cursor: pointer;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  transition: 0.2s;
}
</style>
