import jsPDF from 'jspdf'
import 'jspdf-autotable'

import i18n from '../translation/index.js'
import { prepareContactData } from './prepareContactData.js'
import { amount } from './amount'

export const generate_pdf = param => {
  var columns = [
    { title: i18n.t('lang.pdf.no'), dataKey: 'lp' },
    { title: i18n.t('lang.productsList.name'), dataKey: 'name' },
    { title: i18n.t('lang.pdf.count'), dataKey: 'count' },
    { title: i18n.t('lang.productsList.unit_price'), dataKey: 'unit_price' },
    { title: i18n.t('lang.productsList.price'), dataKey: 'price' }
  ]
  var rows = []

  param.cartProductsList.forEach((element, index) => {
    rows.push({
      lp: index + 1,
      name: element.name,
      count: element.count,
      unit_price: '$' + element.unit_price,
      price: '$' + element.price
    })
  })

  rows.push({
    lp: '',
    name: '',
    count: '',
    unit_price: i18n.t('lang.cart.amount'),
    price: '$' + amount(param.cartProductsList)
  })

  // Only pt supported (not mm or in)
  var doc = new jsPDF('p', 'pt')
  doc.autoTable(columns, rows, {
    styles: { fillColor: [102, 153, 255] },
    columnStyles: {
      lp: { fontStyle: 'bold' }
    },
    margin: { top: 160 },
    addPageContent: function (data) {
      doc.text(i18n.t('lang.header.products_list'), 250, 30)
    },
    drawCell: function (cell, data) {
      var rows = data.table.rows
      if (data.row.index === rows.length - 1) {
        doc.setFillColor(200, 200, 255)
        doc.setFontSize(10)
        doc.setTextColor(40)
        doc.setFontStyle('bold')
      }
    }
  })
  doc.setFontSize(8)
  doc.setTextColor(40)
  doc.setFontStyle('normal')
  doc.text(
    prepareContactData(
      param.name,
      param.surname,
      param.street_locale,
      param.zip_code,
      param.city,
      param.info
    ),
    250,
    60
  )
  doc.save(param.pdf_name + '.pdf')
}
