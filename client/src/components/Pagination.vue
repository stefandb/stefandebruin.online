<template>
    <div class="w-full mt-6 border-t flex items-center border-gray-600 text-white select-none" v-show="totalItems > perPage">
        <div class="w-0 flex-1 flex ">
            <button type="button" class="hover:border-green-400 border-transparent border-t-2 pt-4 px-4 transition ease-in duration-150 hover:scale-125 disabled:scale-100 disabled:transform-none transform disabled:cursor-default disabled-hover:border-transparent active:border-0 focus:border-green-400 focus:outline-none disabled:text-gray-500" :disabled="currentPage === 1" @click="perviousPage">
                Vorige
            </button>
        </div>

        <div class="hidden sm:flex">
            <button type="button" class="hover:border-green-400 border-transparent border-t-2 pt-4 px-4 transition ease-in duration-150 hover:scale-125 disabled:scale-100 disabled:transform-none transform disabled:cursor-default disabled-hover:border-purple-400 active:border-0 focus:border-0 focus:outline-none" :class="{'border-purple-400 text-purple-400': isActive(1)}" @click="goToPage(1)" :disabled="currentPage === 1">
                1
            </button>
            
            <div class="pt-4 px-4 border-transparent border-t-2" :class="{'border-purple-400 text-purple-400': isActive('d')}" v-if="(pages[0] - 1) !== 1 && pages.length > 2">
                ...
            </div>
            

            <button type="button" v-for="(page, index) in pages" :key="index" class="hover:border-green-400 border-transparent border-t-2 pt-4 px-4 transition ease-in duration-150 hover:scale-125 disabled:scale-100 disabled:transform-none transform disabled:cursor-default disabled-hover:border-purple-400 active:border-0 focus:border-0 focus:outline-none" :class="{'border-purple-400 text-purple-400': isActive(page)}" @click="goToPage(page)" :disabled="currentPage === page">
                {{ page }}
            </button>

            <div class="pt-4 px-4 border-transparent border-t-2" :class="{'border-purple-400 text-purple-400': isActive('d')}" v-if="(Number(pages.slice(-1)) + 1) !== lastPage && pages.length > 2">
                ...
            </div>

            <button type="button" class="hover:border-green-400 border-transparent border-t-2 pt-4 px-4 transition ease-in duration-150 hover:scale-125 disabled:scale-100 disabled:transform-none transform disabled:cursor-default disabled-hover:border-purple-400 active:border-0 focus:border-0 focus:outline-none" :class="{'border-purple-400 text-purple-400': isActive(lastPage)}" @click="goToPage(lastPage)" :disabled="currentPage === lastPage">
                {{ lastPage }}
            </button>
        </div>
        <div class="flex sm:hidden">
            <div class="pt-4 px-4 border-transparent border-t-2 border-purple-400 text-purple-400">
                {{currentPage}}
            </div>
        </div>

        <div class="w-0 flex-1 flex justify-end ">
            <button type="button" class="hover:border-green-400 border-transparent border-t-2 pt-4 px-4 transition ease-in duration-150 hover:scale-125 disabled:scale-100 disabled:transform-none transform disabled:cursor-default disabled-hover:border-transparent active:border-0 focus:order-green-400 focus:outline-none disabled:text-gray-500" :disabled="currentPage === lastPage" @click="nextPage">
                Volgende
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['currentPage', 'totalItems', 'perPage'],
    computed: {
        lastPage () {
            return Math.ceil(this.totalItems / this.perPage);
        },
        pages () {
            let pages = [];
            if (this.lastPage <= 7) {
                for (let i = 2; i < this.lastPage; i++) {
                    pages.push(i);
                }
            } else {
                let before = 0;
                let after = 0;

                for (let i = (this.currentPage-1); i > 1; i--) {
                    if (before === 2) {
                        break;
                    }
                    pages.unshift(i);
                    before++;
                }
                    
                if(this.currentPage !== 1 && this.currentPage !== this.lastPage){
                    pages.push(this.currentPage);    
                }

                for (let i = (this.currentPage+1); i < this.lastPage; i++) {
                    if (after === (2 + (2 - before) + (this.currentPage === 1 ? 1 : 0))) {
                        break;
                    }
                    pages.push(i);
                    after++;
                }

                for (let i = (this.currentPage-1 - before); i > 1; i--) {
                    if (before === (2 + (2 - after) + (this.currentPage === this.lastPage ? 1 : 0))) {
                        break;
                    }
                    pages.unshift(i);
                    before++;
                }
            }

            return pages;
        },
  
    },
    methods: {
        isActive (pageIndex) {
            return pageIndex === this.currentPage;
        },
        perviousPage () {
            this.$emit('new-page-index', this.currentPage - 1);
        },
        goToPage (pageIndex) {
            this.$emit('new-page-index', pageIndex);
        },
        nextPage () {
            this.$emit('new-page-index', this.currentPage + 1);
        }
    }
}
</script>