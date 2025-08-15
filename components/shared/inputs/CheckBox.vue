<script setup>
const props = defineProps({
  label: String,
  content: String,
  name: String,
  size: {
    type: String,
    default: "w-5 h-5",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  containerClasses: {
    type: String,
    default: 'flex-row-reverse gap-0'
  }
});

const emit = defineEmits(["update:modelValue"]);

const clickCheckboxHandler = (event) => {
  emit("update:modelValue", event.target.checked);
};
</script>

<template>
  <div class="flex items-center gap-2 -mb-2 scale-90" :class="props.containerClasses">
    <label v-if="props.label" class="label" :for="props.name">{{ props.label }}</label>

    <label class="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        :name="props.name"
        :disabled="props.disabled"
        :checked="props.modelValue"
        @input="clickCheckboxHandler"
        class="hidden"
      />

      <div
        :class="[ 
          'border-[1px] border-black dark:border-white rounded-sm', 
          props.size, 
          props.modelValue ? 'bg-black dark:bg-white' : 'surface-color-primary'
        ]"
      >
        <div
          class="flex justify-center items-center w-full h-full"
          :class="props.disabled ? 'cursor-default' : 'cursor-pointer'"
        >
          <shared-icon-renderer name="tick" class="text-white dark:text-black mr-1" :class="props.modelValue ? 'opacity-100' : 'opacity-0'" />
        </div>
      </div>

      <span>{{ props.content }}</span>
    </label>
  </div>
</template>
