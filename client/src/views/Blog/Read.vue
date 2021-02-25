<template>
  <div>
    <card class="bg-white shadow rounded-lg bg-opacity-75" v-if="loading === false">
      <div class="px-4 py-5 sm:p-6">
        <div class="text-lg max-w-prose mx-auto mb-6">
          <h1 class="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">{{post.title}}</h1>
        </div>
        <div class="prose lg:prose-xl max-w-full text-gray-500" v-html="post.content">
        </div>
      </div>
    </card>

    <card class="bg-white shadow rounded-lg bg-opacity-75 mt-7" v-if="loading === false">
      {{ $filters.dateFormat(post.published_at, "DD-MM-YYYY HH:mm") }}
    </card>

    <card class="" v-if="loading">
      <div class="px-4 py-5 sm:p-6 animate-pulse">
        <div class="text-lg max-w-prose mx-auto mb-6">
          <h1 class="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            <div class="h-4 bg-blue-400 rounded w-3/6 mx-auto"></div>
            </h1>
        </div>
        <div class="prose-lg text-gray-500 mx-auto space-y-2">
          <div class="h-4 bg-blue-400 rounded "></div>
          <div class="h-4 bg-blue-400 rounded "></div>
          <div class="h-4 bg-blue-400 rounded "></div>
        </div>
      </div>
    </card>
  </div>
  
</template>


<script>
import {computed, onMounted} from "vue";

import { SingleObject } from "@/gql/SingleObject.query.js";
import { gql } from "apollo-boost";
import { useQuery, useResult } from '@vue/apollo-composable'
import { onError } from '@apollo/client/link/error'
import { useRoute } from 'vue-router'
import Card from "@/components/Cards/Card";

export default {
  components: {
    Card
  },
setup () {

    const route = useRoute();

    const { result, loading } = useQuery(SingleObject,  {
        'bucketSlug': process.env.VUE_APP_COSMICJS_BUCKET,
        'readKey': process.env.VUE_APP_COSMICJS_READ_KEY,
        'slug': route.params.slug
    });


  const post = useResult(result, null, data => data.getObject);

  return {loading, post};

  },

  methods: {
    showError () {
      console.log(this.$route.path);
      console.log(this.$router);
      // router.push({ name: 'notFound', params: { '0': to.path } })
    }
  }
}
</script>

<style>
.prose img.fr-fil{
    float: left;
    margin: 5px 5px 5px 0;
    max-width: calc(100% - 5px);
}

.prose img.fr-fir{
    float: right;
    margin: 5px 0 5px 5px;
    max-width: calc(100% - 5px);
}
</style>