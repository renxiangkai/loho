import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import List from '@/components/list/List'
import Taste from '@/components/Taste'
import A from '@/components/A'

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
      path: '/taste',
      name: 'Taste',
      component: Taste
    },
    {
      path: '/a',
      name: 'A',
      component: A
    }
  ]
})
