export default {
  name: 'App',
  computed: {
    cartProductsList () {
      return this.$store.state.cart.cartProductsList
    }
  },
  methods: {
    setLanguage (lang) {
      this.$store.dispatch('setLanguage', lang)
      location.reload()
      // this.$router.push('/cart');
    }
  }
}
