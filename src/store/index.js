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
  },
  actions: {
    setProductsStore({ commit }, payload) {
      commit('setProductsStore', payload);
    },
    setProductsShoppingCart({ commit }, payload) {
      const itemCart = this.state.productsShoppingCart.find(product => product.name == payload.name);

      if (!itemCart)
        commit('setProductsShoppingCart', payload);
      // this.state.productsShoppingCart[itemCarts.indexOf(itemCart)] = { ...itemCart }
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
    }
  },
  modules: {
  }
})
