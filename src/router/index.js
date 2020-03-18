import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path:"/adminHome",
    name:'AdminHome',
    component:()=>import('@/views/AdminHome.vue')
  },{
    path:"/aboutMe",
    name:"AboutMe",
    component:()=>import('@/views/AboutMe.vue')
  },{
    path:"/type",
    name:"Type",
    component:()=>import('@/views/Type.vue')
  },{
    path:"/worksList",
    name:"WorksList",
    component:()=>import('@/views/works/WorksList.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
