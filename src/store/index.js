import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProductsStore(state, payload) {
      state.products.push(payload);
    }
  },
  actions: {
    setProductsStore({ commit }, payload) {
      commit('setProductsStore', payload);
    },
  },
  getters: {
    getProducts(state) {
      return state.products[0];
    }
  },
  modules: {
  }
})
