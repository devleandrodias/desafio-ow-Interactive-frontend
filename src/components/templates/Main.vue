<template>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {};
</script>

<style>
@media (min-width: 700px) {
  main {
    background-color: #fffeff;
    height: 80vh;
    margin: auto 15%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
}
@media (max-width: 700px) {
  main {
    background-color: #fffeff;
    margin: auto 5%;
    height: 80vh;
    overflow: scroll;
  }
}
</style>