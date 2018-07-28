<template>
  <div id="app">
    <v-header></v-header>
    <tabs></tabs>
    <router-view/>
  </div>
</template>

<script>
import VHeader from './components/v-header/v-header'
import Tabs from './components/tabs/tabs'
export default {
  name: 'app',
  components: {
    VHeader,
    Tabs
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #42b983;
  margin-top: 60px;
}
</style>
