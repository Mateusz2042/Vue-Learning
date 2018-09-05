import Vue from 'vue'
import Router from 'vue-router'
import ProductsList from '@/containers/ProductsList'
import Basket from '@/containers/Basket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductsList',
      component: ProductsList
    },
    {
      path: '/basket',
      name: 'Basket',
      component: Basket
    }
  ]
})
