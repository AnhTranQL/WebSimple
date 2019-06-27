import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import VueSidebarMenu from 'vue-sidebar-menu'
import firebase from 'firebase'


Vue.use(VueSidebarMenu)

Vue.use(Vuetify)
firebase.initializeApp({
  apiKey: "AIzaSyC6TNwwwJKIGTJyom2_iZvgSP7gNE9sk-o",
  authDomain: "demofirebase-3d6aa.firebaseapp.com",
  databaseURL: "https://demofirebase-3d6aa.firebaseio.com",
  projectId: "demofirebase-3d6aa"
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})