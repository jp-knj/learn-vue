import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Vue instance
// sending in my router, store
// telling vue to render my app
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
