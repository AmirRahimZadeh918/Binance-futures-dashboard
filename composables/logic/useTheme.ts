export const useTheme = () => {
  const colorMode = useColorMode()

  const isDark = computed(() => colorMode.value === THEMES.DARKMODE)

  const switchTheme = () => {
    colorMode.preference = isDark.value ? THEMES.LIGHTMODE : THEMES.DARKMODE
  }

  return {
    theme: colorMode,
    isDark,
    switchTheme,
  }
}
