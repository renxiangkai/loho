import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import List from '@/components/list/List'
import Position from '@/components/Position'
import Cart from '@/components/Cart'
import Detail from '@/components/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/position',
      name: 'Position',
      component: Position
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/detail/:gid',
      name: 'Detail',
      component:Detail
    }
  ]
})
