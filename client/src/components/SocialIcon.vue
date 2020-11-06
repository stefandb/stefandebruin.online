<template>
  <a :href="url">
    <font-awesome-icon :icon="icon"    size="5x"/>
    <!-- v-tooltip.bottom="tooltip"   -->
  </a>
</template>

<script>
export default {
  name: "SocialIcon",
  props: ["url", "icon", "tooltip"]
};
</script>
