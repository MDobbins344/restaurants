<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
  import Header from "./components/Homepage/Header";
 // import Homepage from "./components/Homepage/Homepage";
  //import RestaurantsPage from "./components/RestaurantsPage/RestaurantsPage";
  export default {
  name: 'App',
  components: {
    //RestaurantsPage,
    //Homepage,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
