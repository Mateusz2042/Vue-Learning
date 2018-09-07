import * as types from './types'

export const actions = {

  getCartProductsList ({ commit }) {
    commit(types.GET_ALL_CART_PRODUCTS_LIST)
  },

  removeFromCart ({ commit }, {product, productsList}) {
    commit(types.REMOVE_FROM_CART, {product, productsList})
  }
}
