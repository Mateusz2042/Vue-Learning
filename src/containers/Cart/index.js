import { mapActions, mapState } from 'vuex'
import { sumBy, isEmpty } from 'lodash'
import { generate_pdf } from '../../selectors/generatePdf.js'

export default {
  name: 'Cart',
  data () {
    return {
      name: '',
      surname: '',
      street_locale: '',
      zip_code: '',
      city: '',
      info: '',
      pdf_name: ''
    }
  },
  methods: {
    ...mapActions(['getCartProductsList', 'removeFromCart']),
    amount (cartProductsList) {
      return isEmpty(cartProductsList)
        ? 0
        : sumBy(cartProductsList, p => p.price)
    }
  },
  computed: {
    ...mapState({
      cartProductsList: state => state.cartProductsList,
      productsList () {
        return this.$store.state.products.productsList
      }
    }),
    cartProductsList () {
      return this.$store.state.cart.cartProductsList
    },
    generate_pdf (param) {
      generate_pdf(param)
    }
  }
}
