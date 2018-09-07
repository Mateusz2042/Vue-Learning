import Vuex from 'vuex'
import Vue from 'vue'
import products from './products/index'
import cart from './cart/index'
import translation from './translation/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    cart,
    translation
  }
})
