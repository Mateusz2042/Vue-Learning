import { filter, includes } from 'lodash'

export const mutations = {

  GET_PRODUCTS (state, {products, text}) {
    if (text === undefined || '') {
      state.productsList = products
    } else {
      state.productsList = filter(products, p => includes(p.name, text))
    }
  },

  ADD_TO_CART (state, { product, cartProductsList }) {
    cartProductsList.push({
      id: product.id,
      name: product.id,
      price: product.price,
      description: product.description,
      image: product.image
    })
  }
}
