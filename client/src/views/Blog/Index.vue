<template>
    <div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
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

        <pagination :currentPage="1" :totalItems="2" perPage="12"></pagination>
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
    setup () {
        const { result, loading } = useQuery(postsQuery,  {
            'bucketSlug': process.env.VUE_APP_COSMICJS_BUCKET,
            'readKey': process.env.VUE_APP_COSMICJS_READ_KEY,
        });
        const posts = useResult(result, null, data => data.getObjects.objects);

        const noPosts = {
            title: 'No posts found',
            metadata: {
                summary: "The are no posts to deplay at this moment"
            },
            published_at: Date.now(),
        };

        return {posts, loading, noPosts};
    }
}
</script>