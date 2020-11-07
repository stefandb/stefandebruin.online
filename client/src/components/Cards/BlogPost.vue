<template>
  <card>
    <div class="flex items-center justify-center pb-8 w-full font-bold text-xl">
      <!-- <router-link :to="link"> -->{{ post.title }} <!--</router-link> -->
    </div>
    <article class="h-36">{{ post.summary }}</article>
    <div class="text-xs text-gray-600 flex justify-end">
      {{ createdAtObject }}
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
    link: function() {
      return { name: "Blog.Read", params: { slug: this.post.slug } };
    },
    createdAtObject() {
      return new Date(this.post.createdAt);
    }
  }
};
</script>
