// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入axios  用于获取数据
import axios from "axios"
// 给 vue扩展 全局使用的插件
Vue.prototype.$http = axios

//mint-ui
import { Button, Cell ,Swipe, SwipeItem ,Lazyload ,Loadmore} from 'mint-ui'

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Loadmore.name, Loadmore);
Vue.use(Lazyload);

//引入store
import store from "./store"

//公用组件

import Footer from './components/public/Footer.vue'
import Header from './components/public/Header.vue'

//公用组件注册

Vue.component("v-footer",Footer)
Vue.component("v-header",Header)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
