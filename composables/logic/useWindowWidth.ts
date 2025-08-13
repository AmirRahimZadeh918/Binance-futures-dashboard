export function useWindowWidth() {
  const width = ref<number>(window.innerWidth)

  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  }

  const isSm = ref(false)
  const isMd = ref(false)
  const isLg = ref(false)
  const isXl = ref(false)
  const is2xl = ref(false)

  const updateWidth = () => {
    width.value = window.innerWidth
    isSm.value = width.value >= breakpoints.sm
    isMd.value = width.value >= breakpoints.md
    isLg.value = width.value >= breakpoints.lg
    isXl.value = width.value >= breakpoints.xl
    is2xl.value = width.value >= breakpoints['2xl']
  }

  onMounted(() => {
    updateWidth()
    window.addEventListener('resize', updateWidth)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })

  return {
    width,
    isSm,
    isMd,
    isLg,
    isXl,
    is2xl
  }
}
