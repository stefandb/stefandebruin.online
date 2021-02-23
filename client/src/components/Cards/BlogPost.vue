<template>
  <card>
    <div class="flex items-center justify-center pb-2 xl:pb-8 w-full font-bold text-xl xl:h-42 xl:max-h-42">
      <router-link :to="link">{{ post.title }}</router-link>
    </div>
      <template v-slot:image v-if="'thumbnail' in post.metadata">
        <router-link :to="link" class="group-even:order-last">
          <img :src="post.metadata.thumbnail.imgix_url+'?fit=clamp'" alt="Flowers" class="rounded-lg w-full h-48 sm:h-56 xl:w-64 xl:h-80 object-cover">
        </router-link>

        <!-- <img :src="post.metadata.thumbnail.imgix_url+'?fit=crop&h=300'" class="rounded-l-lg"/> -->
      </template>
    <article class="h-40 sm:h-28 md:h-24 lg:h-36 xl:h-40 text-left font-serif">
      {{ post.metadata.summary }}
      </article>
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
