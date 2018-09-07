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
<div class="amount">
{{$t('lang.cart.amount')}}: {{amount(cartProductsList)}} $
</div>
<div class="data">
    <div class="address">
      <input type="text" id="name" v-model="name" class="input" v-bind:placeholder="$t('lang.contact.contact_name')" />
      <input type="text" id="surname" v-model="surname" class="input" v-bind:placeholder="$t('lang.contact.contact_surname')" />
      <input type="text" id="street_locale" v-model="street_locale" class="input" v-bind:placeholder="$t('lang.contact.contact_street_local')" />
      <input type="text" id="zip_code" v-model="zip_code" class="input" v-bind:placeholder="$t('lang.contact.contact_zip_code')" />
      <input type="text" id="city" v-model="city" class="input" v-bind:placeholder="$t('lang.contact.contact_city')" />
      <textarea maxlength="45" rows="4" cols="50" type="text" id="info" v-model="info" class="input textarea" v-bind:placeholder="$t('lang.contact.contact_info')" />
    </div>
    <div class="pdf">
      <input type="text" id="pdf_name" v-model="pdf_name" class="input" v-bind:placeholder="$t('lang.pdf.placeholder_pdf')" />
      <button class="button_pdf" @click="generate_pdf(cartProductsList)">{{$t('lang.pdf.button_pdf')}}</button>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { sumBy, isEmpty } from "lodash";
import i18n from '../translation/index.js'

export default {
  name: "Cart",
  data() {
    return {
      name: "",
      surname: "",
      street_locale: "",
      zip_code: "",
      city: "",
      info: "",
      pdf_name: ""
    };
  },
  methods: {
    ...mapActions(["getCartProductsList", "removeFromCart"]),
    amount(cartProductsList) {
      return isEmpty(cartProductsList)
        ? 0
        : sumBy(cartProductsList, p => p.price);
    },
    generate_pdf(cartProductsList) {
      var columns = [
        { title: i18n.t('lang.pdf.no'), dataKey: "lp" },
        { title: i18n.t('lang.productsList.name'), dataKey: "name" },
        { title: i18n.t('lang.pdf.count'), dataKey: "count" },
        { title: i18n.t('lang.productsList.price'), dataKey: "price" }
      ];
      var rows = [];

      cartProductsList.forEach((element, index) => {
        rows.push({
          lp: index + 1,
          name: element.name,
          count: element.count,
          price: "$" + element.price
        });
      });

      rows.push({
        lp: "",
        name: "",
        count: i18n.t('lang.cart.amount'),
        price: "$" + this.amount(cartProductsList)
      });

      // Only pt supported (not mm or in)
      var doc = new jsPDF("p", "pt");
      doc.autoTable(columns, rows, {
        styles: { fillColor: [102, 153, 255] },
        columnStyles: {
          lp: { fontStyle: "bold" }
        },
        margin: { top: 160 },
        addPageContent: function(data) {
          doc.text(i18n.t('lang.header.products_list'), 250, 30);
        },
        drawCell: function(cell, data) {
          var rows = data.table.rows;
          if (data.row.index == rows.length - 1) {
            doc.setFillColor(200, 200, 255);
            doc.setFontSize(10);
            doc.setTextColor(40);
            doc.setFontStyle("bold");
          }
        }
      });
      doc.setFontSize(8);
      doc.setTextColor(40);
      doc.setFontStyle("normal");
      doc.text(this.prepareContactData(), 250, 60);
      doc.save(this.pdf_name + ".pdf");
    },
    prepareContactData() {
      return (
        this.name +
        "\r\n" +
        this.surname +
        "\r\n" +
        this.street_locale +
        "\r\n" +
        this.zip_code +
        "\r\n" +
        this.city +
        "\r\n\r\n" +
        i18n.t('lang.contact.contact_info') + ": " +
        this.info
      );
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
  margin-top: 5px;
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

.textarea {
  height: 50px;
  margin-bottom: 10px;
  font: 400 13.3333px Arial;
}

.data {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: flex-end;
}

.address {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 20px;
}

.amount {
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
  font-weight: bold;
  font-size: 26px;
  padding-right: 10px;
}
</style>
