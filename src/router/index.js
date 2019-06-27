import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

const routerOptions = [
  { path: '/', component: 'Landing' },
  { path: '/signin', component: 'Signin' },
  { path: '/signup', component: 'Signup' },
  { path: '/home', component: 'Home' },
  { path: '/action', component: 'Action'},
  { path: '/getAccount', component: 'GetAccount' },
  { path: '/updateAccount', component: 'UpdateAccount' },
  { path: '/addAccount', component: 'AddAccount' },

]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    appTitle: 'My Awesome App',
    user: null,
    error: null,
    loading: false
  }
})

export default new Router({
  mode: 'history',
  routes
})