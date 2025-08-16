<script setup lang="ts">
type AsType = "button" | "link";
type VariantType = "primary" | "secondary" | "danger" | "success" | "custom";

const props = defineProps({
  as: { type: String as PropType<AsType>, default: "button" },
  href: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  active: { type: Boolean, default: false },
  useDefaultStyles: { type: Boolean, default: true },
  variant: { type: String as PropType<VariantType>, default: "primary" },
});

const emit = defineEmits<{
  (e: "click"): void;
}>();

const variantClasses: Record<VariantType, string> = {
  primary: "text-color-primary surface-color-secondary hover:opacity-90",
  secondary:
    "text-color-secondary hover:text-color-primary hover:surface-color-secondary",
  danger: "text-white bg-red-600",
  success: "text-white bg-green-600",
  custom: "",
};

const classes = computed(() => {
  if (!props.useDefaultStyles) return "";
  return [
    "px-2 py-1 text-xs rounded-sm font-normal tracking-wide color-transition",
    props.active
      ? variantClasses[props.variant || "primary"]
      : variantClasses[props.variant || "secondary"],
    props.disabled && "opacity-50 cursor-not-allowed",
  ];
});
</script>

<template>
  <component
    :is="props.as || 'button'"
    :href="props.as === 'link' ? props.href : null"
    :disabled="props.as === 'button' ? props.disabled : null"
    @click="!props.disabled && emit('click')"
    :class="classes"
  >
    <slot />
  </component>
</template>
