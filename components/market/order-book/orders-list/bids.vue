<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
});

const calculateSum = (index) => {
  return props.data
    .slice(0, index + 1)
    .reduce((acc, curr) => acc + parseFloat(curr[1]), 0)
    .toFixed(3);
};
</script>

<template>
  <div
    v-for="(item, index) in data"
    :key="index"
    class="grid grid-cols-4 bg-danger/20 hover:bg-danger/10 cursor-pointer py-[2.5px]"
  >
    <SharedLivePrice
      :data="item[0]"
      class="text-danger font-italic text-xs col-span-2 tracking-wider"
    />

    <SharedBaseText
      :text="item[1]"
      class="text-color-primary font-italic text-xs col-span-1 tracking-wider text-center"
    />

    <SharedBaseText
      :text="calculateSum(index)"
      class="text-color-primary font-italic text-xs col-span-1 tracking-wider text-right"
    />
  </div>
</template>
