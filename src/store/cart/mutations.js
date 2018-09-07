import { find } from 'lodash'

export const mutations = {

  GET_ALL_CART_PRODUCTS_LIST (state) {
    state.cartProductsList = state.cartProductsList
  },

  REMOVE_FROM_CART (state, {product, productsList}) {
    if (product.count !== 1) {
      const findingProduct = find(state.cartProductsList, p => p.id === product.id)
      const unitPrice = find(productsList, p => p.id === product.id).price
      findingProduct.count -= 1
      findingProduct.price = unitPrice * findingProduct.count
    } else {
      state.cartProductsList.splice(state.cartProductsList.indexOf(product), 1)
    }
  }
}
