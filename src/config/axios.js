import Vue from 'vue'
import axios from 'axios'

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: 'https://api.myjson.com/bins/9e9fl'
    });

    Vue.prototype.$httpCep = axios.create({
      baseURL: 'https://viacep.com.br/ws'
    });
  }
})