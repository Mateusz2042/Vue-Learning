<template>
  <div>
    <!-- ---------------------- -->
    <div id="note">
      {{$t('lang.productsList.added_to_cart')}}
    </div>
    <!-- ---------------------- -->
    <div class='searching'>
      <label class="label">{{$t('lang.productsList.search')}}:</label>
      <input class="input" v-model="filterText" @change="getProducts(filterText)" @input="getProducts(filterText)"/>
    </div>
    <div style="overflow-x:auto;">
      <table>
        <tr>
          <th>{{$t('lang.productsList.image')}}</th>
          <th>{{$t('lang.productsList.name')}}</th>
          <th>{{$t('lang.productsList.description')}}</th>
          <th>{{$t('lang.productsList.unit_price')}}</th>
          <th>{{$t('lang.productsList.add')}}</th>
        </tr>
        <tr v-for='product in products' v-bind:key="product.id">
          <td><img v-bind:src='product.image'/></td>
          <td>{{product.name}}</td>
          <td>{{product.description}}</td>
          <td>$ {{product.price}}</td>
          <td><button @click="addToCart({product, cartProductsList})" class='button'><label class='plus'>+</label></button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script src="./index.js" />

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  @import './style.css';
</style>
