<template>
<div>
  <div class="count">
    {{$t('lang.cart.count_cart')}}: {{cartProductsList.length}}
  </div>
<table>
  <tr>
    <th>{{$t('lang.productsList.image')}}</th>
    <th>{{$t('lang.productsList.name')}}</th>
    <th>{{$t('lang.productsList.description')}}</th>
    <th>{{$t('lang.productsList.price')}}</th>
    <th>{{$t('lang.cart.count')}}</th>
    <th>{{$t('lang.cart.remove')}}</th>
  </tr>
  <tr v-for='product in cartProductsList' v-bind:key="product.id">
    <td><img v-bind:src='product.image'/></td>
    <td>{{product.name}}</td>
    <td>{{product.description}}</td>
    <td>$ {{product.price}}</td>
    <td>{{product.count}}</td>
    <td><button @click="removeFromCart(product)" class='button'><label class='minus'>-</label></button></td>
  </tr>
</table>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cart",
  methods: {
    ...mapActions(["getCartProductsList", "removeFromCart"])
  },
  computed: {
    ...mapGetters(["cartProductsList"]),
    cartProductsList() {
      return this.$store.state.cart.cartProductsList;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.minus {
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  background-color: red;
  border-radius: 60px;
  width: 30px;
  height: 30px;
  outline: none;
}

.button:hover {
  background-color: tomato;
}

.count {
  margin-bottom: 40px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
</style>
