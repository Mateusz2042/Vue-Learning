import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './locales/en.json'
import pl from './locales/pl.json'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'pl',
  messages: {
    en: {
      lang: en
    },
    pl: {
      lang: pl
    }
  }
})
