<script setup>
const { isDark } = useTheme();
</script>

<template>
  <SharedIconRenderer
    class="w-24 cursor-pointer"
    :key="isDark"
    :name="isDark ? 'logo-dark' : 'logo-light'"
    extention="png"
  />
</template>
