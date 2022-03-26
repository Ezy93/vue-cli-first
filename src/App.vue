<template>
  <div id="app" class="mt-0">
    <newTitle/>
    <new-hero/>
  </div>
</template>

<script>
import newHero from './components/newHero.vue';
import newTitle from './components/newTitle.vue';

export default {
  name: 'App',
  components: {
    newTitle,
    newHero
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
