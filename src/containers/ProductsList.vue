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
  <tr v-for='product in products'>
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
  data () {
    return {
      products: [
        {
          id: 1,
          name: 'backpack',
          description: 'big backpack',
          price: 100,
          image: '@/assets/images/backpack.png'
        },
        {
          id: 2,
          name: 'bike',
          description: 'new bike',
          price: 1200,
          image: '../assets/images/bike.png'
        },
        {
          id: 3,
          name: 'guitar',
          description: 'new guitar',
          price: 2000,
          image: '../assets/images/guitar.png'
        },
        {
          id: 4,
          name: 'gun',
          description: 'fast gun',
          price: 3500,
          image: '../assets/images/gun.png'
        },
        {
          id: 5,
          name: 'microwave',
          description: 'new microwave',
          price: 350,
          image: '../assets/images/microwave-oven.png'
        },
        {
          id: 6,
          name: 'book',
          description: 'interesting book',
          price: 35,
          image: '../assets/images/open-book.png'
        },
        {
          id: 7,
          name: 'camera',
          description: 'high resolution',
          price: 600,
          image: '../assets/images/video-camera.png'
        },
        {
          id: 8,
          name: 'cutlery',
          description: 'new cutlery',
          price: 200,
          image: '../assets/images/restaurant-cutlery.png'
        },
        {
          id: 9,
          name: 'ball',
          description: 'new ball',
          price: 150,
          image: '../assets/images/soccer-ball-variant.png'
        },
        {
          id: 10,
          name: 'pendrive',
          description: '64 gb',
          price: 180,
          image: '../assets/images/usb.png'
        }
      ]
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
