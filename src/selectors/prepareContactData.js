import i18n from '../translation/index.js'

export const prepareContactData = (name, surname, street_locale, zip_code, city, info) => {
  return (
    name +
    '\r\n' +
    surname +
    '\r\n' +
    street_locale +
    '\r\n' +
    zip_code +
    '\r\n' +
    city +
    '\r\n\r\n' +
    i18n.t('lang.contact.contact_info') + ': ' +
    info
  )
}
