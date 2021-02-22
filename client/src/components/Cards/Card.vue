<template>
  <div class="bg-white xl:flex"> <!-- flex -->
    <slot name="image" class="xl:flex-1"></slot> <!-- flex-1 -->
    <div class="p-4 xl:p-8 xl:flex-1 flex-col shadow-lg hover:shadow-2xl"> <!-- flex-1 -->
      <slot></slot>
    </div>
  </div>
</template>
