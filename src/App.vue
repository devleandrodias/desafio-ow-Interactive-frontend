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

html #app {
  font-family: "Source Sans Pro", sans-serif;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
  cursor: pointer;
}
</style>