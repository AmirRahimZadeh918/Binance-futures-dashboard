<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <SharedIconRenderer class="w-6" :name="props.name" extention="png" />
</template>
