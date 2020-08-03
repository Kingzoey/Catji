import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Home_0 from '../views/Home_0.vue'
import Home_1 from '../views/Home_1.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home_0',
    name: 'Home_0',
    component: Home_0
  },
  {
    path: '/home_1',
    name: 'Home_1',
    component: Home_1
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
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login_0',
    name: 'Login_0',
    component: () => import('../views/Login_0.vue')
  },
  {
    path: '/register_0',
    name: 'Register_0',
    component: () => import('../views/Register_0.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/Mine.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: () => import('../views/Favorite.vue')
  },
  {
    path: '/upload',
    name: 'Release',
    component: () => import('../views/Release.vue')
  },
  {
    path: '/video/:vid',
    name: 'Video',
    component: () => import('../views/Video.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
