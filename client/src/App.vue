<template>
  <div id="app" class="container">

    <div id="nav">
      <!-- //this is where the multiple topics will be viewed at first! -->
      <router-link to="/">Home</router-link>|
      <!-- <router-link to=""> -->
      <h1>Home page for rantbook</h1>

    </div>
    <router-view />
  </div>
</template>
</div>
<style>
  #app {
    font-family: 'Electrolize', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>