<template>
  <card>
    <div class="flex items-center justify-center pb-8 w-full font-bold text-xl">
      <!-- <router-link :to="link"> -->{{ post.title }} <!--</router-link> -->
    </div>
    <article class="h-40 text-left">{{ post.metadata.summary }}</article>
    <div class="text-xs text-gray-600 flex justify-end">
      {{ $filters.dateFormat(createdAtObject, "DD-MM-YYYY HH:mm") }}
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
      return new Date(this.post.published_at);
    }
  }
};
</script>
