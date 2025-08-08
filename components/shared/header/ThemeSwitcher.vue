<script setup>
const { isDark, switchTheme } = useTheme()

const iconName = computed(() => (isDark.value ? "moon" : "sun"));
</script>

<template>
  <SharedIconRenderer
    @click="switchTheme"
    :name="iconName"
    :key="isDark"
    extention="svg"
    class="w-8 cursor-pointer text-color-primary hover:text-brand color-transition"
  />
</template>
