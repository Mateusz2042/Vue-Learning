import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProductsList',
  mounted () {
    this.getProducts()
  },
  methods: {
    ...mapActions(['getProducts', 'addToCart'])
  },
  computed: {
    ...mapGetters(['products']),
    cartProductsList () {
      return this.$store.state.cart.cartProductsList
    }
  }
}
