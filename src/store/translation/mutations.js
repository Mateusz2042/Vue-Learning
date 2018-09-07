import * as types from './types'
import i18n from '../translation'

export const mutations = {

  [types.SET_LANGUAGE] (state, data) {
    i18n.locale = data
    state.language = data
    localStorage.setItem('language', data)
    console.log('Language', data)
  }
}
