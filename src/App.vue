<template>
  <div id="app">
    <newTitle msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import newTitle from './components/newTitle.vue'

export default {
  name: 'App',
  components: {
    newTitle
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
