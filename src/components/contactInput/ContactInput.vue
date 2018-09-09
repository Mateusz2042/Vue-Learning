<template>
  <input type="text" :value="value" v-bind:id="name" class="input" v-bind:placeholder="placeholder"
    @input="updateCode($event.target.value)" ref="input" />
</template>

<script src="./index.js"/>

<style>
  @import './style.css';
</style>
