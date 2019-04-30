import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    userName: ''
  },
  mutations: {
    change(state, value) {
      state.userName = value;
    }
  },
  getters: {
    user: state => state.userName
  },
  actions: {}
});
