export const mutations = {

  GET_ALL_CART_PRODUCTS_LIST (state) {
    state.cartProductsList = state.cartProductsList
  },

  REMOVE_FROM_CART (state, product) {
    state.cartProductsList.splice(state.cartProductsList.indexOf(product), 1)
  }
}
