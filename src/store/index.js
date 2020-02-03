import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productsShoppingCart: []
  },
  mutations: {
    setProductsStore({ products }, payload) {
      products.push(payload);
    },
    setProductsShoppingCart({ productsShoppingCart }, payload) {
      productsShoppingCart.push(payload);
    },
    setUpdateQuantityItens({ productsShoppingCart }, payload) {
      const { index, value } = payload;
      productsShoppingCart[index] = { ...productsShoppingCart[index], quantity: value }
    },
    cleanProductsShoppingCart(state) {
      state.productsShoppingCart = [];
    }
  },
  actions: {
    setProductsStore({ commit }, payload) {
      commit('setProductsStore', payload);
    },
    setProductsShoppingCart({ commit }, payload) {
      const itemCart = this.state.productsShoppingCart.find(product => product.name == payload.name);

      if (!itemCart)
        commit('setProductsShoppingCart', payload);
    },
    cleanProductsShoppingCart({ commit }) {
      commit('cleanProductsShoppingCart');
    },
    setUpdateQuantityItens({ commit }, payload) {
      commit('setUpdateQuantityItens', { index: payload.index, value: payload.value });
    }
  },
  getters: {
    getProducts({ products }) {
      return products[0];
    },
    getProductsShoppingCart({ productsShoppingCart }) {
      return productsShoppingCart;
    },
    getItensCart({ productsShoppingCart }) {
      return productsShoppingCart
    },
    getQuantityItensCart({ productsShoppingCart }) {
      return productsShoppingCart.length;
    },
    getValueTotal({ productsShoppingCart }) {
      return productsShoppingCart
        .map(p => 1 * p.price)
        .reduce((total, atual) => total + atual, 0);
    },
    getQuantityItem({ productsShoppingCart }) {
      const { quantity } = productsShoppingCart[0]

      return quantity;
    }
  },
  modules: {
  }
})
