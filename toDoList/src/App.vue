<template>
  <div id="app">
    <ListHeader></ListHeader>
    <br>
    <ListBody></ListBody>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ListHeader from "./components/ListHeader";
import ListBody from "./components/ListBody";

export default {
  name: 'App',
  components: {
    ListBody,
    ListHeader,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
