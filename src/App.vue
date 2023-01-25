<template>
  <NavTop />
  <router-view />
  <FooterPage />
</template>

<script>
import NavTop from './components/NavTop.vue'
import FooterPage from './components/FooterPage.vue'

export default {
  name: 'App',
  components: {
    NavTop,
    FooterPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b4c8a8;
  height: auto;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

body {
  margin: 0px;
  background-color: #222733;
}
</style>
