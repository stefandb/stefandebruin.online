import { createApp, h, provide } from 'vue'
import App from './App.vue'

import router from './router';
// import store from './store'

import '@/assets/css/app.css'
import VTooltip from 'v-tooltip'

// createApp(App).use(store).use(router).mount('#app')

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  // faCog,
  // faSearch,
  fas
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import DefaultLayout from "@/layouts/Default";
import FullPageLayout from "@/layouts/FullPage";

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable'


// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://graphql.cosmicjs.com/v2',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})





library.add(
  // faCog,
  // faSearch,
  fab,
  fas
);


const clickOutside = {
  // When the bound element is mounted into the DOM...
  mounted(el, binding, vnode, prevVnode) {
    const handleOutsideClick = (e) => {
      e.stopPropagation()
      const { handler, exclude } = binding.value
      let clickedOnExcludedEl = false
      exclude.forEach(refName => {
        if (!clickedOnExcludedEl) {
          const excludedEl = document.getElementById(refName);
          clickedOnExcludedEl = excludedEl.contains(e.target)
        }
      })
      if (!el.contains(e.target) && !clickedOnExcludedEl) {
        handler()
      }
    }

    el.__vueClickOutside__ = handleOutsideClick
    document.addEventListener('click', handleOutsideClick)
  },
  unmounted(el) {
    document.removeEventListener('click', el.__vueClickOutside__);
    el.__vueClickOutside__ = null;
  }
};

import { dateFormat } from "@vuejs-community/vue-filter-date-format";

const app = createApp(
  {
    setup () {

      provide(DefaultApolloClient, apolloClient)
    },
    render() {
      return h(App)
    }
  }
)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component('default-layout', DefaultLayout)
  .component('full-page-layout', FullPageLayout)
  .use(router)
  .use(VTooltip)
  .directive('click-outside', clickOutside);

app.config.globalProperties.$filters = {
  currencyUSD(value) {
    return '$' + value
  },
  dateFormat
}


app.mount('#app');
