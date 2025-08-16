<template>
  <div
    class="min-h-screen background-color text-color-primary color-transition font-DanaRegular text-sm"
  >
    <Header />
    <slot />
    <SharedInfiniteCarousel class="fixed bottom-0" />
  </div>
</template>
