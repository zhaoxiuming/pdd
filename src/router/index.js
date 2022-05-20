import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "@/store/index"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path:"/login",
    name:"login",
    component:()=>
      import ("../views/LoginView.vue")
  },
  {
    path: "/video",
    name: "video",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/VideoView.vue"),
  },
  {
    path: "/type",
    name: "type",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TypeView.vue"),
  },
  {
    path: "/talk",
    name: "talk",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TalkView.vue"),
    beforeEnter:(to,from,next)=>{
      // let token = localStorage.getItem("token")
      // console.log(this.$store)
      let token = store.state.token
      if(token){
        next()
      }else{
        next({name:"login",params:{id:"talk"}})
      }
    }
  },
  {
    path: "/mine",
    name: "mine",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MineView.vue"),
    beforeEnter:(to,from,next)=>{
        // let token = localStorage.getItem("token")
        // console.log(this.$store)
        let token = store.state.token
        if(token){
          next()
        }else{
          next({name:"login",params:{id:"mine"}})
        }
    }
  },
];

const router = new VueRouter({
  routes,
});
//权限管理

export default router;
