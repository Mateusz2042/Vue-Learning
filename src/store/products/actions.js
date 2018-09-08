import shop from '../../api/shop'
import * as types from './types'

export const actions = {

  getProducts ({ commit }, text) {
    shop.getProducts(products => {
      commit(types.GET_PRODUCTS, { products, text })
    })
  },

  addToCart ({ commit }, { product, cartProductsList }) {
    var note = document.getElementById('note')
    note.style.opacity = 1
    setTimeout(() => { note.style.opacity = 0 }, 800)
    commit(types.ADD_TO_CART, { product, cartProductsList })
  }
}
