<template>
    <div class="w-full mt-6 border-t flex items-center border-gray-600 text-white" v-show="totalItems >perPage">
        <div class="w-0 flex-1 flex ">
            <div class="hover:border-green-400 border-transparent border-t-2 pt-4 px-4">
                Vorige
            </div>
        </div>

        <div class="flex">
            <div class="pt-4 px-4 border-transparent border-t-2 hover:border-green-400" :class="{'border-purple-400 text-purple-400': isActive(1)}">
                1
            </div>


            <div class="pt-4 px-4 border-transparent border-t-2 hover:border-green-400">
                2
            </div>
            <div class="pt-4 px-4 border-transparent border-t-2 hover:border-green-400">
                3
            </div>
            <div class="pt-4 px-4 border-transparent border-t-2">
                {{ currentInMiddle }}
            </div>
            <div class="pt-4 px-4 border-transparent border-t-2 hover:border-green-400">
                7
            </div>
            <div class="pt-4 px-4 border-transparent border-t-2 hover:border-green-400">
                8
            </div>


            <div class="pt-4 px-4 border-transparent border-t-2 hover:border-green-400" :class="{'border-purple-400 text-purple-400': isActive(lastPage)}">
                {{ lastPage }}
            </div>
        </div>


        <div class="w-0 flex-1 flex justify-end ">
            <div class="hover:border-green-400 border-transparent border-t-2 pt-4 px-4">
                Volgende
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['currentPage', 'totalItems', 'perPage'],
    computed: {
        lastPage () {
            return this.totalItems / this.perPage;
        },
        currentInMiddle () {
            return this.lastPage - this.currentPage > 2 && this.currentPage > 3
        }
    },
    methods: {
        isActive (pageIndex) {
            return pageIndex === this.currentPage;
        }
    }
}
</script>