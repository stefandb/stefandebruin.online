<template>
  <a :href="url" class="text-black border-2 border-white rounded-full p-3">
    <font-awesome-icon :icon="icon" size="5x" v-tooltip.bottom="tooltip"/>
  </a>
</template>

<script>
export default {
  name: "SocialIcon",
  props: ["url", "icon", "tooltip"]
};
</script>
