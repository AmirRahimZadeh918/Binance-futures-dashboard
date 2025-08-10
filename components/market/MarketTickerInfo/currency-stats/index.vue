<script setup></script>

<template>
  <div class="flex flex-col justify-center items-center">
    <SharedLivePrice data="118556" class="text-xl text-success font-medium" />
    <div class="flex flex-row items-center justify-between w-full">
      <SharedLivePrice
        data="1500.56"
        class="text-xs text-success font-medium"
      />
      <SharedLivePercent
        data="12"
        class="text-xs text-success font-medium"
      />
    </div>
  </div>
</template>
