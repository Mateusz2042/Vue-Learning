<template>
<div>
  <nav>
    <div class="flags_container">
      <img class="flag" src="../static/flags/pl.png" @click="setLanguage('pl')" />
      <img class="flag" src="../static/flags/gb.png" @click="setLanguage('en')" />
      <img class="flag" src="../static/flags/it.png" @click="setLanguage('it')" />
    </div>
<!-- --------------------- -->
    <div id="menu" @click="menu_open()"><img src="../static/images/menu.png" alt="menu"></div>
    <div id="menu_content">
      <img class="flag" src="../static/flags/pl.png" @click="setLanguage('pl')" />
      <img class="flag" src="../static/flags/gb.png" @click="setLanguage('en')" />
      <img class="flag" src="../static/flags/it.png" @click="setLanguage('it')" />
    </div>
<!-- --------------------- -->
    <router-link class="route-one links" to="/">{{$t('lang.header.products_list')}}</router-link>
    <router-link class="route-two links" to="/cart">{{$t('lang.header.cart')}} ( {{cartProductsList.length}} )</router-link>
  </nav>
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
  background-image:linear-gradient(#2c3e50, #42b983);
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
  transform: scale(1.3);
}

.links:visited {
  color: white;
  font-size: 20px;
}

.flags_container {
  position: absolute;
  right: 20px;
  display: block;
}

.flag {
  border: 1px solid white;
}

.flag:hover {
  transform: scale(1.5);
}

#menu {
  position: absolute;
  right: 20px;
  display: none;
}

#menu_content {
  position: absolute;
  right: 15px;
  margin-top: 60px;
  display: none;
  flex-direction: column;
}

#menu:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 670px) {
  .flags_container {
    display: none;
  }

  #menu {
    display: block;
  }

  /* #menu:hover + #menu_content {
    opacity: 1;
  } */

  .route-one {
    margin-right: 5px;
  }

  .route-two {
    margin-left: 5px;
  }

  .links:hover {
    color: white;
    transform: scale(1.2);
  }

  .flag {
    border: 1px solid white;
  }
}

@media screen and (min-width: 671px) {
    #menu_content {
      display: none;
    }
}
</style>
