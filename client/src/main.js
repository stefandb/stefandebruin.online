import { createApp, h, provide } from 'vue'
import App from './App.vue'

import router from './router';
// import store from './store'

import ApolloClient from "apollo-boost";
import DefaultApolloClient from "@vue/apollo-composable";
import VueApollo from 'vue-apollo'
import { ApolloClients } from '@vue/apollo-composable'

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

const apolloClient = new ApolloClient({
  uri: `https://graphql.cosmicjs.com/v2`
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
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
    console.log(vnode.component);
    console.log(prevVnode);

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

      provide(DefaultApolloClient, {
        default: apolloClient,
      });
      provide(ApolloClients, {
        default: apolloClient,
      });
    },
    render() {
      return h(App)
    }
  }
)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(VTooltip)
  .use(apolloProvider)
  .directive('click-outside', clickOutside);

  console.log(dateFormat);

app.config.globalProperties.$filters = {
  currencyUSD(value) {
    return '$' + value
  },
  dateFormat
}
 


app.mount('#app');
