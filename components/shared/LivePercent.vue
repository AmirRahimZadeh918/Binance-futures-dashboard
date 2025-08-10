<script setup>
const props = defineProps({
  data: {
    type: Number,
    required: true
  }
})
</script>

<template>
    <div class="flex flex-row items-center">
        <span>
            +
        </span>
        <p>{{ data }}</p>
        <span>
            %
        </span>
    </div>
</template>
