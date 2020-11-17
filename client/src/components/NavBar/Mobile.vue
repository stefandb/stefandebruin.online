<template>
    <router-link :to="{ name: route }" class="block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out" :class="classes">
        <slot></slot>
    </router-link>
</template>

<script>
import { useRoute } from 'vue-router';
import { watch } from 'vue';
export default {
    props: ['route', 'position'],

    computed: {
        isActive(){
            return this.$route.name === this.route;
        },
        classes () {
            return {
                'text-white bg-gray-900': this.isActive,
                'text-gray-300 hover:text-white hover:bg-gray-700': !this.isActive,
            }
        }
    }
}
</script>



