<template>
  <a :href="url" class="text-black border-2 border-white rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
    <font-awesome-icon :icon="icon" size="5x" v-tooltip.bottom="tooltip"/>
  </a>
</template>

<script>
export default {
  name: "SocialIcon",
  props: ["url", "icon", "tooltip"]
};
</script>
