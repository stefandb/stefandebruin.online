import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/blog/:slug",
    name: "Blog.Read",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Blog/Read.vue")
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
