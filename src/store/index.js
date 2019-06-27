import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
      appTitle: 'My Awesome App',
      home: 'Home'
  },
  mutations: {},
  actions: {},
  getters: {}
})