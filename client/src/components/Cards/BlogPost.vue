<template>
  <card>
    <div class="flex items-center justify-center pb-2 sm:pb-8 w-full font-bold text-xl">
      <router-link :to="link">{{ post.title }}</router-link>
    </div>
    <!-- v-if="'thumbnail' in post.metadata" -->
      <template v-slot:image >
        <router-link :to="link">
          <picture>
            <source media="(min-width:650px)" srcset="https://imgix.cosmicjs.com/68202630-7546-11eb-88e5-b1d69d639893-IMG20210221141830.jpg?fit=crop">
            <source media="(min-width:465px)" srcset="https://imgix.cosmicjs.com/68202630-7546-11eb-88e5-b1d69d639893-IMG20210221141830.jpg?fit=crop">
            <img src="https://imgix.cosmicjs.com/68202630-7546-11eb-88e5-b1d69d639893-IMG20210221141830.jpg?fit=clamp" alt="Flowers" class="rounded-t-lg w-full h-48 object-cover">
          </picture>
        </router-link>

        <!-- <img :src="post.metadata.thumbnail.imgix_url+'?fit=crop&h=300'" class="rounded-l-lg"/> -->
      </template>
    <article class="h-40 text-left font-serif">
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
