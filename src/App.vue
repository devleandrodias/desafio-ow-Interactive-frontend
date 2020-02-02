<template>
  <div id="app">
    <app-toolbar />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import Toolbar from "./components/templates/Toolbar";
import Footer from "./components/templates/Footer";

export default {
  components: {
    appToolbar: Toolbar,
    appFooter: Footer
  }
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
