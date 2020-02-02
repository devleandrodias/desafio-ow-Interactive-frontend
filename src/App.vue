<template>
  <div id="app">
    <app-toolbar />
    <app-main />
    <app-footer />
  </div>
</template>

<script>
import Toolbar from "./components/templates/Toolbar";
import Main from "./components/templates/Main";
import Footer from "./components/templates/Footer";

export default {
  components: {
    appToolbar: Toolbar,
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
}

body {
  font-family: "Source Sans Pro", sans-serif;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>