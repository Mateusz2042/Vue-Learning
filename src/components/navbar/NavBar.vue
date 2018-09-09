<template>
  <nav>
    <div class="flags_container">
      <img class="flag" src="../../../static/flags/pl.png" @click="setLanguage('pl')" />
      <img class="flag" src="../../../static/flags/gb.png" @click="setLanguage('en')" />
      <img class="flag" src="../../../static/flags/it.png" @click="setLanguage('it')" />
    </div>
<!-- --------------------- -->
    <div id="menu" @click="menu_open()"><img src="../../../static/images/menu.png" alt="menu"></div>
    <div id="menu_content">
      <img class="flag" src="../../../static/flags/pl.png" @click="setLanguage('pl')" />
      <img class="flag" src="../../../static/flags/gb.png" @click="setLanguage('en')" />
      <img class="flag" src="../../../static/flags/it.png" @click="setLanguage('it')" />
    </div>
<!-- --------------------- -->
    <router-link class="route-one links" to="/">{{$t('lang.header.products_list')}}</router-link>
    <router-link class="route-two links" to="/cart">{{$t('lang.header.cart')}} ( {{cartProductsList.length}} )</router-link>
  </nav>
</template>

<script src="./index.js"/>

<style>
  @import './style.css';
</style>
