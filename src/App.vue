<template>
  <div id="app">
    <app-header />
    <app-main />
    <app-footer />
  </div>
</template>

<script>
import Header from "./components/templates/Header";
import Main from "./components/templates/Main";
import Footer from "./components/templates/Footer";

export default {
  components: {
    appHeader: Header,
    appMain: Main,
    appFooter: Footer
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh 80vh 10vh;
}

button {
  cursor: pointer;
}
</style>