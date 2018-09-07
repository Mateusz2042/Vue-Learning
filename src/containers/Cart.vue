<template>
<div>
  <div class="count">
    {{$t('lang.cart.count_cart')}}: {{cartProductsList.length}}
  </div>
  <div class="pdf">
    <input type="text" id="name" v-model="name" class="input" v-bind:placeholder="$t('lang.pdf.button_pdf')" />
    <button class="button_pdf" @click="download(cartProductsList)">{{$t('lang.pdf.button_pdf')}}</button>
  </div>
<table>
  <tr>
    <th>{{$t('lang.productsList.image')}}</th>
    <th>{{$t('lang.productsList.name')}}</th>
    <th>{{$t('lang.productsList.description')}}</th>
    <th>{{$t('lang.cart.count')}}</th>
    <th>{{$t('lang.productsList.price')}}</th>
    <th>{{$t('lang.cart.remove')}}</th>
  </tr>
  <tr v-for='product in cartProductsList' v-bind:key="product.id">
    <td><img v-bind:src='product.image'/></td>
    <td>{{product.name}}</td>
    <td>{{product.description}}</td>
    <td>{{product.count}}</td>
    <td>$ {{product.price}}</td>
    <td><button @click="removeFromCart({product, productsList})" class='button'><label class='minus'>-</label></button></td>
  </tr>
</table>
</div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import jsPDF from "jspdf";

export default {
  name: "Cart",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    ...mapActions(["getCartProductsList", "removeFromCart"]),
    download(cartProductsList) {
      let pdfName = this.name;
      var doc = new jsPDF();
      doc.text(cartProductsList[0].name + " " + cartProductsList[0].count + " " + "$" + cartProductsList[0].price, 10, 10);
      // doc.text(cartProductsList[0].name + " " + cartProductsList[0].count + " " + "$" + cartProductsList[0].price, 10, 10);
      doc.save(pdfName + ".pdf");
    }
  },
  computed: {
    ...mapState({
      cartProductsList: state => state.cartProductsList,
      productsList() {
      return this.$store.state.products.productsList;
    }
    }),
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

td,
th {
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

.input {
  margin-left: 10px;
  border-radius: 6px;
  outline: none;
  height: 20px;
}

.input:focus {
  border-bottom: 2px solid blue;
}

.pdf {
  margin-bottom: 20px;
  margin-top: 20px;
}

.button_pdf {
  outline: none;
  height: 25px;
  border-radius: 6px;
}
</style>
