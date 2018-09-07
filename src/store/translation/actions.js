import * as types from './types'

export const actions = {

  setLanguage ({ commit }, context) {
    commit(types.SET_LANGUAGE, context)
  }
}
