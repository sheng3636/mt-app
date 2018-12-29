
import Vue from 'vue';
import App from './App';
import VueRouter from "vue-router";
import Axios from "axios";


// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import Goods from './components/goods/Goods';
import Ratings from "./components/ratings/Ratings";
import Seller from "./components/seller/Seller";

//全局注册
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.prototype.$axios = Axios;

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  {path: "/", redirect: "/goods"},
  {path: "/goods", component: Goods},
  {path: "/ratings", component: Ratings},
  {path: "/seller", component: Seller}
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes,
  mode:"history",
  linkActiveClass:"active"
})

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
