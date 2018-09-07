import { actions } from './actions'
import { mutations } from './mutations'

const state = {
  language: localStorage.getItem('language') || ''
}

export default {
  state,
  actions,
  mutations
}
