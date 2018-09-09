<template>
  <input type="text" :value="value" v-bind:id="name" class="input" v-bind:placeholder="placeholder"
    @input="updateCode($event.target.value)" ref="input" />
</template>

<script src="./index.js"/>

<style>
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
</style>
