<template>
<div>
  <nav>
    <router-link class="route-one links" to="/">Products List</router-link>
    <router-link class="route-two links" to="/cart">Cart ( {{cartProductsList.length}} )</router-link>
  </nav>
  <div id="app">
    <div class="logo">
    <img src="./assets/logo.png">
    </div>
    <router-view/>
  </div>
</div>


</template>

<script>
export default {
  name: "App",
  computed: {
    cartProductsList() {
      return this.$store.state.cart.cartProductsList;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  animation: logo 8s linear infinite;
}

@keyframes logo {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
}

nav {
  height: 50px;
  background-color: #42b983;
  display: flex;
  justify-content: center;
  align-items: center;
}

.route-one {
  margin-right: 20px;
}

.route-two {
  margin-left: 20px;
}

.links {
    color: white;
    font-size: 20px;
    text-decoration: none;
 }

 .links:hover {
  color: white;
  font-size: 26px;
 }

 .links:visited {
  color: white;
  font-size: 20px;
 }

</style>
