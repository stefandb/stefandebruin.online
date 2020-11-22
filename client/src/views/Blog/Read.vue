<template>
  <div>
    <div class="bg-white overflow-hidden shadow rounded-lg bg-opacity-75" v-if="loading === false">
      <div class="px-4 py-5 sm:p-6">
        <div class="text-lg max-w-prose mx-auto mb-6">
          <p class="text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Introducing</p>
          <h1 class="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">{{post.title}}</h1>
        </div>
        <div class="prose prose-lg text-gray-500 mx-auto" v-html="post.content">
        </div>
      </div>
    </div>
    
    <div class="bg-white overflow-hidden shadow rounded-lg bg-opacity-75" v-if="loading">
      <div class="px-4 py-5 sm:p-6 animate-pulse">
        <div class="text-lg max-w-prose mx-auto mb-6">
          <p class="text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Introducing</p>
          <h1 class="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            <div class="h-4 bg-blue-400 rounded w-3/6 mx-auto"></div>
            </h1>
        </div>
        <div class="prose prose-lg text-gray-500 mx-auto space-y-2">
          <div class="h-4 bg-blue-400 rounded "></div>
          <div class="h-4 bg-blue-400 rounded "></div>
          <div class="h-4 bg-blue-400 rounded "></div>
        </div>
      </div>
    </div>
  </div>
  
</template>


<script>
import {computed, onMounted} from "vue";

import { gql } from "apollo-boost";
import { useQuery, useResult } from '@vue/apollo-composable'
import { onError } from '@apollo/client/link/error'
import { useRoute } from 'vue-router'

export default {
setup () {

    const route = useRoute()

    const loading = true;
//     const { result, loading, error } = useQuery(
//       gql`query blogPost($bucketSlug: String!, $readKey: String!, $slug: String!){
//   getObject(bucket_slug: $bucketSlug, input: {
//     slug: $slug,
//     read_key: $readKey
//   }) {
//     title
//     content
//     metadata
//   }
// }`,
//       {
//         "slug": route.params.slug,
//         'bucketSlug': process.env.VUE_APP_COSMICJS_BUCKET,
//         'readKey': process.env.VUE_APP_COSMICJS_READ_KEY,
//       }
//     );


//     onError(error => {
//       console.log('error found 2');
// })
// const post = useResult(result, null, data => data.getObject);
//     return {
//       post,
//       loading,
//       error
//     }

return {loading};

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