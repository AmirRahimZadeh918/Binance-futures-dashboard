<script setup>
const { isDark } = useTheme();
</script>

<template>
  <div
    class="flex justify-between surface-color-primary color-transition w-full px-6 select-none"
  >
  <div class="flex flex-row gap-8">
    <div class="flex flex-row items-center gap-4">
      <SharedIconRenderer
        class="w-7 cursor-pointer"
        :key="isDark"
        :name="isDark ? 'home-dark' : 'home-light'"
        extention="png"
      />
      <SharedBrandLogo />
    </div>
    <Menus />
  </div>
    <div class="flex flex-row items-center gap-3">
      <Profile />
      <LanguageSettings />
      <HelpCenter />
      <Setting />
      <HeaderThemeSwitcher />
    </div>
  </div>
</template>
