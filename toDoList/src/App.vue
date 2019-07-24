<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  background-color: white;
  border-radius: 5px;
}
body {
  background: gray;
  padding: 20px;
  width:500px;
  margin: 0 auto;
  margin-top: 40px;
  background: gray;
  border-radius: 5px;
}
</style>
