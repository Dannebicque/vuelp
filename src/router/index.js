import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Articles from '../views/Articles.vue'
import Fournisseurs from '../views/Fournisseurs'
import AddFournisseur from '../views/AddFournisseur'
import EditFournisseur from '../views/EditFournisseur'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles
  },
  {
    path: '/fournisseurs',
    name: 'Fournisseurs',
    component: Fournisseurs
  },
  {
    path: '/fournisseurs/add',
    name: 'AddFournisseur',
    component: AddFournisseur
  },
  {
    path: '/fournisseurs/edit/:id',
    name: 'EditFournisseur',
    component: EditFournisseur
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
