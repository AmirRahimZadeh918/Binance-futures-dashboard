<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="relative">
    <div class="flex flex-row items-center gap-2">
      <shared-icon-renderer
        v-if="icon"
        :name="icon"
        extention="png"
        class="w-7"
      />
      <p class="text-sm font-medium text-color-primary color-transition">
        {{ title }}
      </p>
    </div>
    <shared-icon-renderer
      class="text-brand absolute right-4 scale-75 hidden group-hover:block"
      name="arrow-right"
      extention="svg"
    />
  </div>
</template>
