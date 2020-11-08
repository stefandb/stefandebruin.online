import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
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

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).use(VTooltip).directive('click-outside', clickOutside).mount('#app')
