<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const activeTab = ref(props.modelValue);

watch(activeTab, (val) => emit("update:modelValue", val));
watch(() => props.modelValue, (val) => (activeTab.value = val));

const tabs = FUTURES_ORDER_TYPES;
const mainTabs = tabs.slice(0, 3);
const extraTabs = tabs.slice(2);

const showDropdown = ref(false);

const selectedExtraTab = computed(() => {
  return extraTabs.find((item) => item.key === activeTab.value) || null;
});

const mainTabsForRender = computed(() => {
  return [mainTabs[0], mainTabs[1], selectedExtraTab.value || mainTabs[2]];
});
</script>

<template>
  <div class="flex flex-row items-center gap-2 border-b border-color-secondary">
    <SharedTabs :items="mainTabsForRender" v-model="activeTab" />

    <div
      class="flex flex-col items-end relative"
      @mouseenter="showDropdown = true"
      @mouseleave="showDropdown = false"
    >
      <SharedIconRenderer
        name="arrow-down"
        extention="svg"
        class="text-color-secondary cursor-pointer transition-transform duration-300 w-5 -ml-4"
        :class="{ 'rotate-180': showDropdown }"
      />

      <SharedSelectionModal
        :show="showDropdown"
        v-model="activeTab"
        :items="extraTabs"
        class="w-32 top-6 mr-1 absolute shadow-lg rounded-md bg-surface z-10"
      />
    </div>
  </div>
</template>
