<template>
    <div>
        <div class="grid grid-cols-3 gap-4">
            <blog-post v-for="(post, index) in posts" :key="index" :post="post" class="bg-opacity-50 rounded-lg">
            </blog-post>
        </div>

        <pagination :currentPage="1" :totalItems="90" perPage="9"></pagination>
    </div>
</template>


<script>
import { postsQuery } from "@/gql/posts.query.js";
import { useQuery, useResult} from '@vue/apollo-composable';
import BlogPost from "@/components/Cards/BlogPost.vue";
import Pagination from "@/components/Pagination.vue";
export default {
    components: {
        BlogPost,
        Pagination
    },
    setup () {
        const { result } = useQuery(postsQuery);
        const posts = useResult(result, null, data => data.getObjects.objects);

        return {posts};
    }
}
</script>