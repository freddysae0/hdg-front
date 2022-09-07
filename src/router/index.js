import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WerewolfsView from '../views/WerewolfsView.vue'
import FairiesView from '../views/FairiesView.vue'
import VampiresView from '../views/VampiresView.vue'
import HumansView from '../views/HumansView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/humans',
    name: 'humans',
    component: HumansView
  },
  {
    path: '/vampires',
    name: 'vampires',
    component: VampiresView
  },
  {
    path: '/werewolfs',
    name: 'werewolfs',
    component: WerewolfsView
  },
  {
    path: '/fairies',
    name: 'fairies',
    component: FairiesView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
