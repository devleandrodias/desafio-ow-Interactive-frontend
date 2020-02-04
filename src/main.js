import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './config/axios'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('money', valor => {
  return `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
