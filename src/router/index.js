import Vue from 'vue'
import VueRouter from 'vue-router'
import Wallet from '@/views/Wallet/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Wallet',
    component: Wallet,
    children: [
      {
        path: '',
        name: 'Balance',
        component: () => import('@/views/Wallet/Index.vue')
      },
      {
        path: 'transaction',
        name: 'Transaction',
        component: () => import('@/views/Wallet/Transaction.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
