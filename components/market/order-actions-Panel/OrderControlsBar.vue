<script setup></script>

<template>
  <div class="flex flex-row justify-between items-center">
    <div class="flex flex-row items-center gap-2">
      <SharedActionButton variant="primary" class="w-20">
        Cross
      </SharedActionButton>
      <SharedActionButton variant="primary" class="w-20">
        20x
      </SharedActionButton>
      <SharedActionButton variant="primary" class="px-3">
        S
      </SharedActionButton>
    </div>
    <SharedIconRenderer
      name="elipisese"
      extention="svg"
      class="text-color-secondary w-4 cursor-pointer"
    />
  </div>
</template>
