<template>
  <div id="app">
    <ListHeader></ListHeader>
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
}
</style>
