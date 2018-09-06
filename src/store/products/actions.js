import shop from '../../api/shop'
import * as types from './types'

export const actions = {

  getProducts ({ commit }, text) {
    shop.getProducts(products => {
      commit(types.GET_PRODUCTS, {products, text})
    })
  },

  addToCart ({ commit }, product) {
    commit(types.ADD_TO_CART, product.id)
  }
}
