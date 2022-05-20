import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username:"",
    token:""
  },
  getters: {},
  mutations: {
    settoken(state,payload){
      state.token = payload //存到token
    }
  },
  actions: {},
  modules: {},
});
