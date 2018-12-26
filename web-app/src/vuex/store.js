import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

const state = {
  loading: false,
  indexMenu:1
}

export default new Vuex.Store({
  state
})
