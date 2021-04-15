<template>
  <div id="app">
    <TheNavbar></TheNavbar>
    <router-view/>
  </div>
</template>
<script>
  import TheNavbar from './components/TheNavbar';
export default {
  components: {
    TheNavbar
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
