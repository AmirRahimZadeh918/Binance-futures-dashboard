<script setup lang="js">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  filled: {
    type: Boolean,
    default: false,
    required: false,
  },
  extention: {
    type: String,
    default: 'svg',
  },
})

const icon = ref('')

if (props.extention === 'svg') {
  try {
    const iconsImport = import.meta.glob(`assets/icons/**/**.svg`, {
      query: '?raw',
      import: 'default',
      eager: false,
    })
    const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]()
    icon.value = rawIcon
  } catch {
    console.error(`[nuxt-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`)
  }
} else {
    icon.value = `/_nuxt/assets/icons/${props.name}.${props.extention}`
    console.log(icon.value)
}
</script>

<template>
  <span
    v-if="props.extention === 'svg'"
    :aria-label="name"
    :class="{ 'nuxt-icon--fill': !filled }"
    class="nuxt-icon flex shrink-0 items-center justify-center"
    v-html="icon"
  />
  <img v-else :src="icon" :key="icon" alt="" />
</template>

<style lang="css" scoepd>
.nuxt-icon svg {
  vertical-align: middle;
}

.nuxt-icon.nuxt-icon--fill,
.nuxt-icon.nuxt-icon--fill * {
  fill: currentColor !important;
}
</style>
