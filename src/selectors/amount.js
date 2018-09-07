import { sumBy, isEmpty } from 'lodash'

export const amount = (cartProductsList) => {
  return isEmpty(cartProductsList)
    ? 0
    : sumBy(cartProductsList, p => p.price)
}
