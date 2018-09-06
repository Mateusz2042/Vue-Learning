<template>
<div>
  <div class='searching'>
    <label class="label">Search:</label>
    <input class="input"/>
  </div>
<table>
  <tr>
    <th>Image</th>
    <th>Name</th>
    <th>Description</th>
    <th>Price</th>
    <th>Add</th>
  </tr>
  <tr v-for='product in productsList' v-bind:key="product.id">
    <td><img v-bind:src='product.image'/></td>
    <td>{{product.name}}</td>
    <td>{{product.description}}</td>
    <td>$ {{product.price}}</td>
    <td><button class='button'><label class='plus'>+</label></button></td>
  </tr>
</table>
</div>
</template>

<script>
export default {
  name: 'ProductsList',
  computed: {
    productsList () {
      return this.$store.state.products
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
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

.plus {
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
}

.button {
  background-color: blue;
  border-radius: 60px;
  outline: none;
}

.button:hover {
  background-color: dodgerblue;
}

input {
  width: 20%;
}

.searching {
  margin-bottom: 20px;
  display: flex;
  margin-left: 20px;
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

.label {
  align-items: center;
  display: flex;
}

</style>
