import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from 'vant'
import 'vant/lib/index.css';
import "amfe-flexible"
import "./assets/style/reset.css"
import Router from 'vue-router'

Vue.use(Vant);

Vue.config.productionTip = false;

//解决重定向问题
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
 return routerPush.call(this, location).catch(error=> error)
}

// 使用mock
if(process.env.NODE_ENV === "development") {
  require("./mock/mock.js")
}
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
