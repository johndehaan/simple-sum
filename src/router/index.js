import Vue from 'vue'
import Router from 'vue-router'
import Sum from '@/components/Sum'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sum',
      component: Sum
    }
  ]
})
