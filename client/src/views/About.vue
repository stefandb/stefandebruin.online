<template>
  
  <div class="grid grid-cols-1 gap-6 lg:grid-flow-col-dense lg:grid-cols-3">
    <div class="lg:col-start-1 lg:col-span-3 text-center">
      {{ page?.title }}
    </div>

    <div class="lg:col-start-1 lg:col-span-2 " >
      <card class="rounded-lg">
        <section v-html="page?.content"></section>
      </card>
    </div>

    <div class="lg:col-start-3 lg:col-span-1">
      <card class="rounded-lg">
        html 100
        en da soort dingen
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
