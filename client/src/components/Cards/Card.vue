<template>
  <div class="bg-white"> <!-- flex -->
    <slot name="image" class=""></slot> <!-- flex-1 -->
    <div class="p-4 sm:p-8 flex flex-col shadow-lg hover:shadow-2xl"> <!-- flex-1 -->
      <slot></slot>
    </div>
  </div>
</template>
