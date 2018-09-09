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
  @import './style.css';
</style>
