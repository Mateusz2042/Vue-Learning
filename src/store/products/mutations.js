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
    if (some(cartProductsList, p => p.id === product.id)) {
      const findingProduct = find(cartProductsList, p => p.id === product.id)
      const unitPrice = find(state.productsList, p => p.id === product.id).price
      findingProduct.count += 1
      findingProduct.price = unitPrice * findingProduct.count
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
