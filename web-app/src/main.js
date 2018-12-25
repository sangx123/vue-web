// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './vuex/store.js'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  store,
  components: { App
  },
  template: '<App/>'
})

Vue.prototype.islogin = function () {
  let user = window.localStorage.getItem('access-token');
  if (!user) {
    return false
  } else {
    return true
  }
}
