import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productsShoppingCart: [
      {
        name: "Notebook Essentials E30 Intel Core I3 4GB 1TB LED Full HD 15.6'' W10 Cinza Titânio - Samsung",
        price: "1.799,90",
        picture: "https://i.ibb.co/B4xmk45/1.jpg",
        category: "Eletrônicos"
      }
      // {
      //   category: 'Eletrônico',
      //   productItem: 'Notebook',
      //   sightValueUnit: null,
      //   sightValue: null,
      //   parcelValueUnit: null,
      //   parcelValue: null,
      //   quantityParcel: null,
      //   valueTotal: null,
      //   valueTotalParcel: null
      // }
    ]
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
    getProducts({ products }) {
      return products[0];
    },
    getProductsShoppingCart({ productsShoppingCart }) {
      return productsShoppingCart;
    }
  },
  modules: {
  }
})
