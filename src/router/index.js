import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/comics',
    name: 'comics',
    component: () => import('@/views/Comics.vue')
  },
  {
    path: '/comics/:id',
    name: 'comicDetail',
    component: () => import('@/views/ComicDetail.vue')
  },
  {
    path: '/comics/:id/chapter/:cid',
    name: 'comicChapter',
    component: () => import('@/views/ComicChapter.vue')
  },
  {
    path: '/*',
    redirect: { name: 'comics' }
  }
]

const router = new VueRouter({
  routes
})

export default router
