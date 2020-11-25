<template>
  <card>
    <div class="flex items-center justify-center pb-8 w-full font-bold text-xl animate-pulse">
      <div class="h-7 bg-blue-400 rounded w-1/2"></div>
    </div>
    <article class="h-40 text-left space-y-2 animate-pulse">
        
        <div class="h-4 bg-blue-400 rounded "></div>
        <div class="h-4 bg-blue-400 rounded "></div>
        <div class="h-4 bg-blue-400 rounded "></div>
        <div class="h-4 bg-blue-400 rounded "></div>
        <div class="h-4 bg-blue-400 rounded w-3/4"></div>
    </article>
    <div class="text-xs text-gray-600 flex justify-end animate-pulse">
      <div class="h-4 bg-blue-400 rounded w-1/4"></div>
    </div>
  </card>
</template>

<script>
import Card from "@/components/Cards/Card";
export default {
  name: "BlogPostCard",
  props: ["post"],
  components: { Card },
  computed: {
  }
};
</script>
