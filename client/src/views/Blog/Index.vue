<template>
    <div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
            <template v-if="loading">
                <loading-blog-post class="bg-opacity-50 rounded-lg"/>
                <loading-blog-post class="bg-opacity-50 rounded-lg"/>
                <loading-blog-post class="bg-opacity-50 rounded-lg"/>
            </template>
            <template v-if="!loading">
                <blog-post v-for="(post, index) in posts" :key="index" :post="post" class="bg-opacity-50 rounded-lg">
                </blog-post>
            </template>
            <template v-if="!loading && posts === null">
                <blog-post :post="noPosts" class="bg-opacity-50 rounded-lg">
                </blog-post>
            </template>
        </div>

        <pagination :currentPage="currentPage" :totalItems="posts?.length" perPage="8" @new-page-index="goToPage"></pagination>
    </div>
</template>


<script>
import { postsQuery } from "@/gql/posts.query.js";
import { useQuery, useResult} from '@vue/apollo-composable';
import BlogPost from "@/components/Cards/BlogPost.vue";
import LoadingBlogPost from "@/components/Cards/LoadingBlogPost.vue";
import Pagination from "@/components/Pagination.vue";
export default {
    components: {
        BlogPost,
        Pagination,
        LoadingBlogPost
    },
    data() {
        return { currentPage: 1 }
    },
    setup () {
        const { result, loading } = useQuery(postsQuery,  {
            'bucketSlug': process.env.VUE_APP_COSMICJS_BUCKET,
            'readKey': process.env.VUE_APP_COSMICJS_READ_KEY,
        });
        let currentPage = 1;

        const posts = useResult(result, null, data => data.getObjects.objects);

        const noPosts = {
            title: 'No posts found',
            metadata: {
                summary: "The are no posts to deplay at this moment"
            },
            published_at: Date.now(),
        };

        
        return {posts, loading, noPosts};
    },
    methods: {
        goToPage ($event) {
            console.log($event);
            this.currentPage = $event;

        }
    }
}
</script>