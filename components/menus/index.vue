<script setup>
const menus = MENUS;
</script>

<template>
  <div class="flex flex-row items-center gap-5">
    <MenusMenuItem
      v-for="menu in menus"
      :title="menu.title"
      :items="menu.items"
    />
  </div>
</template>
