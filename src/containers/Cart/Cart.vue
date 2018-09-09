<template>
  <div>
    <div class="count">
      {{$t('lang.cart.count_cart')}}: {{cartProductsList.length}}
    </div>
    <div style="overflow-x:auto;">
      <table>
        <tr>
          <th>{{$t('lang.productsList.image')}}</th>
          <th>{{$t('lang.productsList.name')}}</th>
          <th>{{$t('lang.productsList.description')}}</th>
          <th>{{$t('lang.cart.count')}}</th>
          <th>{{$t('lang.productsList.unit_price')}}</th>
          <th>{{$t('lang.productsList.price')}}</th>
          <th>{{$t('lang.cart.remove')}}</th>
        </tr>
        <tr v-for='product in cartProductsList' v-bind:key="product.id">
          <td><img v-bind:src='product.image'/></td>
          <td>{{product.name}}</td>
          <td>{{product.description}}</td>
          <td>{{product.count}}</td>
          <td>$ {{product.unit_price}}</td>
          <td>$ {{product.price}}</td>
          <td><button @click="removeFromCart({product, productsList})" class='button'><label class='minus'>-</label></button></td>
        </tr>
      </table>
    </div>
    <div class="amount">
    {{$t('lang.cart.amount')}}: {{amount(cartProductsList)}} $
    </div>
    <div class="data">
        <div class="address">
          <contact-input v-model="name" v-bind:placeholder="$t('lang.contact.contact_name')" />
          <contact-input v-model="surname" v-bind:placeholder="$t('lang.contact.contact_surname')" />
          <contact-input v-model="street_locale" v-bind:placeholder="$t('lang.contact.contact_street_local')" />
          <contact-input v-model="zip_code" v-bind:placeholder="$t('lang.contact.contact_zip_code')" />
          <contact-input v-model="city" v-bind:placeholder="$t('lang.contact.contact_city')" />
          <textarea maxlength="45" rows="4" cols="50" type="text" id="info" v-model="info" class="input textarea" v-bind:placeholder="$t('lang.contact.contact_info')" />
        </div>
        <div class="pdf">
          <input type="text" id="pdf_name" v-model="pdf_name" class="input" v-bind:placeholder="$t('lang.pdf.placeholder_pdf')" />
          <button class="button_pdf" @click="generate_pdf({cartProductsList, name, surname, street_locale, zip_code, city, info, pdf_name})">{{$t('lang.pdf.button_pdf')}}</button>
        </div>
      </div>
  </div>
</template>

<script src="./index.js" />

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
  word-wrap: normal;
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

@media screen and (max-width: 670px) {
  .pdf {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 25%;
  }

  .pdf {
    margin-top: 250px;
  }

  .button_pdf {
    margin-top: 10px;
  }

  .input {
    margin-left: 0px;
  }
}
</style>
