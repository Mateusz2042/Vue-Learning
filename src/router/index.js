import Vue from 'vue'
import Router from 'vue-router'
import ProductsList from '@/containers/ProductsList'
import Cart from '@/containers/Cart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ProductsList',
      component: ProductsList
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
