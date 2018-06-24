import Vue from 'vue'
import Vuex from 'vuex'
import { state, getters } from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = {
  state,
  getters,
  mutations,
  actions
}

export default new Vuex.Store(store)
