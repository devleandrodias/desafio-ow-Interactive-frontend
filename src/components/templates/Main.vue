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
    margin: 0 15%;
    height: auto;
  }
}
@media (max-width: 700px) {
  main {
    background-color: #fffeff;
    margin: 0 5%;
    height: auto;
    overflow: scroll;
  }
}
</style>