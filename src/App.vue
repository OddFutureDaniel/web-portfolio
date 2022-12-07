<template>
  <NavTop />
  <router-view />
  <!-- <MainSection /> -->
  <FooterPage />
</template>

<script>
import NavTop from './components/NavTop.vue'
// import MainSection from './components/MainSection.vue'
import FooterPage from './components/FooterPage.vue'

export default {
  name: 'App',
  components: {
    NavTop,
    // MainSection,
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
  color: #b1a4a4;
  height: auto;
  overflow: scroll;
}

body {
  margin: 0px;
  background-color: #222733;
}
</style>
