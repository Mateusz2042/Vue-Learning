<template>
<div>
  <nav-bar/>
  <div id="app">
    <div class="logo">
    <img src="./assets/logo.png">
    </div>
    <router-view/>
  </div>
</div>
</template>

<script src="./index.js"/>

<style>
  @import './style.css';
</style>
