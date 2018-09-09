export default {
  name: 'contact-input',
  props: {
    name: String,
    placeholder: String,
    value: String
  },
  methods: {
    updateCode (value) {
      this.$emit('input', value)
    }
  }
}
