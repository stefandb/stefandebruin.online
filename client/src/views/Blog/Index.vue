<template>
    <div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <template v-if="loading">
                <loading-blog-post class="bg-opacity-25 rounded-lg"/>
                <loading-blog-post class="bg-opacity-50 rounded-lg"/>
                <loading-blog-post class="bg-opacity-50 rounded-lg"/>
                <loading-blog-post class="bg-opacity-50 rounded-lg"/>
                <loading-blog-post class="bg-opacity-50 rounded-lg"/>
                <loading-blog-post class="bg-opacity-50 rounded-lg"/>
                <loading-blog-post class="bg-opacity-50 rounded-lg"/>
                <loading-blog-post class="bg-opacity-50 rounded-lg"/>
            </template>
            <template v-if="!loading">
                <blog-post v-for="(post, index) in result.getObjects.objects" :key="index" :post="post" class="bg-opacity-75 rounded-lg ">
                </blog-post>
            </template>
            <template v-if="!loading && posts === null">
                <blog-post :post="noPosts" class="bg-opacity-50 rounded-lg">
                </blog-post>
            </template>
        </div>

        <pagination :currentPage="currentPage" :totalItems="totalItems" perPage="8" @new-page-index="goToPage"></pagination>
    </div>
</template>


<script>
import { postsQuery } from "@/gql/posts.query.js";
import { useQuery, useResult} from '@vue/apollo-composable';
import BlogPost from "@/components/Cards/BlogPost.vue";
import LoadingBlogPost from "@/components/Cards/LoadingBlogPost.vue";
import Pagination from "@/components/Pagination.vue";
import { useRoute } from 'vue-router'
import { gql } from "apollo-boost";

export default {
    components: {
        BlogPost,
        Pagination,
        LoadingBlogPost
    },
    apollo: {
        // Pages
        posts: {
            // GraphQL Query
            query: gql`
                query tagsPage($skip: Int!, $first: Int!) {
                posts(skip: $skip, first: $first) {
                    id
                    title
                    slug
                    summary
                    createdAt
                    categories {
                    title
                    slug
                    }
                }
                }
            `,
            // Initial variables
            variables: {
                skip: 0,
                first: 30
            }
        }
    },
    setup () {
        const route = useRoute();

        const { result, loading, fetchMore } = useQuery(postsQuery,  {
            'bucketSlug': process.env.VUE_APP_COSMICJS_BUCKET,
            'readKey': process.env.VUE_APP_COSMICJS_READ_KEY,
            'skip': 'page' in route.params && route.params.page > 1 ? (8 * (route.params.page - 1)) : 0
        });
        let currentPage = 'page' in route.params ? parseInt(route.params.page) : 1;

        // const posts = useResult(result, null, data => data.getObjects.objects);
        // const totalItems = useResult(result, null, data => data.getObjects.total);

        const noPosts = {
            title: 'No posts found',
            metadata: {
                summary: "The are no posts to deplay at this moment"
            },
            published_at: Date.now(),
        };

        const posts = [];
        const totalItems = 13;
        return {currentPage, loading, noPosts, posts, totalItems, fetchMore, result};
    },
    methods: {
        goToPage ($event) {
            this.$router.push({ name: "Blog.Page", params: { page: $event } });
            this.currentPage = $event;
            window.scrollTo(0,0);
            document.getElementById("pageContent").scrollTop = 0;

            this.fetchMore({
                variables: {
                    skip: this.currentPage > 1 ? (8 * (this.currentPage - 1)) : 0,
                },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                    // No new feed posts
                    if (!fetchMoreResult) return previousResult

                    console.log(previousResult, fetchMoreResult);
                    return fetchMoreResult;
                    // Concat previous feed with new feed posts
                    // return {
                    //     ...previousResult,
                    //     feed: [
                    //     ...previousResult.feed,
                    //     ...fetchMoreResult.feed,
                    //     ],
                    // }
                },
            })
        }
    }
}
</script>