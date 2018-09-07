import { filter, includes, some, find } from 'lodash'

export const mutations = {

  GET_PRODUCTS (state, { products, text }) {
    if (text === undefined || '') {
      state.productsList = products
    } else {
      state.productsList = filter(products, p => includes(p.name, text))
    }
  },

  ADD_TO_CART (state, { product, cartProductsList }) {
    if (some(cartProductsList, product)) {
      find(cartProductsList, p => p.id === product.id).count += 1
    } else {
      cartProductsList.push({
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image,
        count: 1
      })
    }
  }
}
