import Vue from 'vue'
import Vuex from 'vuex'
import volume from './modules/volume'
import network from './modules/network'
import getters from './getters'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    volume,
    network
  },
  state,
  mutations: {
  },
  actions: {
  },
  getters
})
