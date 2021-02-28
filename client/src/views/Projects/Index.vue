<template>
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            <div class="bg-white w-full aspect-w-1 aspect-h-1 rounded-lg" v-for="(project, index) in result?.getObjects?.objects" :key="index">
                <div class="pt-4  bg-no-repeat bg-center">
                    <div class="text-center font-akaya-kanadaka text-3xl">
                        {{ project.metadata.npm_package }}
                    </div>
                    
                    <img class="mt-6 pl-4 pr-4"  :src="require('@/assets/images/brands/tailwind.svg')"/>
                </div>
                <div class="flex flex-wrap content-end">
                    <a :href="'https://npmjs.org/package/'+project.metadata.npm_package" rel="nofollow" class="flex-none">
                        <img :src="'https://img.shields.io/npm/v/'+project.metadata.npm_package+'.svg?style=for-the-badge'" alt="NPM version" class="rounded-bl-lg">
                    </a>
                    <div class="flex-grow"></div>
                    <a :href="'https://npmcharts.com/compare/'+project.metadata.npm_package+'?minimal=true'" rel="nofollow" class="flex-none">
                        <img :src="'https://img.shields.io/npm/dm/'+project.metadata.npm_package+'.svg?style=for-the-badge'" alt="NPM downloads" class="rounded-br-lg">
                    </a>
                </div>           
            </div>
        </div>

        <pagination :currentPage="currentPage" :totalItems="totalItems" perPage="8" @new-page-index="goToPage"></pagination>
    </div>
</template>

<script>
import { projectsQuery } from "@/gql/projects.query.js";
import { useQuery, useResult} from '@vue/apollo-composable';
import Pagination from "@/components/Pagination.vue";
import { useRoute } from 'vue-router'
import { gql } from "apollo-boost";


export default {
    components: {
        Pagination
    },
    setup () {
        const route = useRoute();

        const { result, loading, fetchMore } = useQuery(projectsQuery,  {
            'bucketSlug': process.env.VUE_APP_COSMICJS_BUCKET,
            'readKey': process.env.VUE_APP_COSMICJS_READ_KEY,
            'skip': 'page' in route.params && route.params.page > 1 ? (8 * (route.params.page - 1)) : 0
        });
        let currentPage = 'page' in route.params ? parseInt(route.params.page) : 1;

        // const posts = useResult(result, null, data => data.getObjects.objects);
        const totalItems = useResult(result, null, data => data.getObjects.total);

        const noPosts = {
            title: 'No projects found',
            metadata: {
                summary: "The are no projects to show at this moment"
            },
            published_at: Date.now(),
        };

        const posts = [];

        return {currentPage, loading, noPosts, posts, totalItems, fetchMore, result};
    },
}
</script>