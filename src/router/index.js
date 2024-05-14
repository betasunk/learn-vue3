import { createRouter, createWebHistory } from 'vue-router'

const Recommend = () => import('@/views/recommend.vue' /* webpackChunkName: "recommend" */)
const Singer = () => import('@/views/singer.vue' /* webpackChunkName: "singer" */)
const TopList = () => import('@/views/top-list.vue' /* webpackChunkName: "top-list" */)
const Search = () => import('@/views/search.vue' /* webpackChunkName: "search" */)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/top-list',
      component: TopList
    },
    {
      path: '/search',
      component: Search
    }
    // {
    //   path:'',
    //   component:()=>import('@/views/')
    // }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
