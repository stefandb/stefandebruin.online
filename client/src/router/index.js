import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { navBar: true }
  },
  {
    path: "/blog",
    name: "Blog.Index",
    component: () => import('@/views/Blog/Index.vue'),
    meta: { navBar: true }
  },
  {
    path: "/blog/:slug",
    name: "Blog.Read",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Blog/Read.vue"),
    beforeEnter: (to, from, next) => {
      function isValid (param) {
         console.log("SLUG", param);
         return true;
      }
   
       if (!isValid(to.params.slug)) {
         console.log("ASG", to.path);
         let redirectPath = to.path;

         if (redirectPath.charAt(0) == "/") redirectPath = redirectPath.substr(1)
        router.push({ name: 'Notfound', params: { 'catchAll': redirectPath.split('/') } })
        
       }
   
       next();
     }
  },

  {
    path: "/projects",
    name: "Projects.Index",
    component: () => import('@/views/Blog/Index.vue'),
    meta: { navBar: true }
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { navBar: true }
  },
  {
    // path: "*",
    path: "/:catchAll+",
    name: "Notfound",
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
