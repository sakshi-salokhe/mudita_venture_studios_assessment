<template>
  <div id="app">
    <BasePage />
  </div>
</template>

<script>
import BasePage from './components/BasePage.vue'

export default {
  name: 'App',
  components: {
    BasePage
  }
}
</script>

<style scoped>

html, body, #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  margin: auto;
  background-color: #2c3e50;
  width: 97%;
  height: 47.5vw;
  color: #f2f2f2;

  padding: 1vw;
}
</style>
