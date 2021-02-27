<template>
  
  <div class="grid grid-cols-1 gap-6 lg:grid-flow-col-dense lg:grid-cols-3">
    <div class="font-akaya-kanadaka lg:col-start-1 lg:col-span-3 text-center mt-2 mb-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
      {{ page?.title }}
    </div>

    <div class="lg:col-start-1 lg:col-span-2 " >
      <card class="rounded-lg">
        <section v-html="page?.content"></section>
      </card>
    </div>

    <div class="lg:col-start-3 lg:col-span-1">
      <card class="rounded-lg">
        <div class="relative pt-1" v-for="(value, key) in page?.metadata" :key="key">
          <span class="capitalize">{{key}}</span>
          <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
            <div :style="{width: value+'%'}" class="transition duration-1000 delay-1000 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
          </div>
        </div>

      </card>
    </div>
  </div>

</template>

<script>
import { pageQuery } from "@/gql/page.query.js";
import Card from "@/components/Cards/Card";
import { useQuery, useResult} from '@vue/apollo-composable';

export default {
  setup () {
    const { result, loading } = useQuery(pageQuery,  {
        'bucketSlug': process.env.VUE_APP_COSMICJS_BUCKET,
        'readKey': process.env.VUE_APP_COSMICJS_READ_KEY,
        'slug': 'about'
    });

    const page = useResult(result, null, data => data.getObject);

    return {page, loading};
  },
  components: {
    Card
  }
}
</script>
