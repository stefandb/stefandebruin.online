import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

import '@/assets/css/app.css'

// createApp(App).use(store).use(router).mount('#app')

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCog,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCog,
  faSearch,
  fab
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).mount('#app')