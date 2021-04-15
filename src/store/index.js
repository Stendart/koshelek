import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curentSymbol: 'BTCUSDT',
    logDiffChange: []
  },
  mutations: {
    changeSymbol(state, payload) {
      state.curentSymbol = payload
    },
    logger(state, payload) {
      state.logDiffChange.push(payload)
    }
  },
  actions: {

  },
  getters: {
    getCurentSymbol(state) {
      return state.curentSymbol
    },
    getLogger(state) {
      return state.logDiffChange
    }
  },
  modules: {
  }
})
