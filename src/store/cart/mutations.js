import { find } from 'lodash'

export const mutations = {

  GET_ALL_CART_PRODUCTS_LIST (state) {
    state.cartProductsList = state.cartProductsList
  },

  REMOVE_FROM_CART (state, product) {
    if (product.count !== 1) {
      find(state.cartProductsList, p => p.id === product.id).count -= 1
    } else {
      state.cartProductsList.splice(state.cartProductsList.indexOf(product), 1)
    }
  }
}
