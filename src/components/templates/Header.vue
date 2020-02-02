<template>
  <header>
    <div class="header-main">
      <span class="logo">
        Mkt
        <span class="logo-destaque">Place</span>
      </span>
      <div class="shopping">
        <a href="#">Produtos</a>
        <!-- <img src="../../../assets/shopping-cart.svg" alt="shopping-cart" height="30px" /> -->
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  background-color: #fffeff;
  height: 10vh;
  z-index: 1;
  -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.75);
}

a {
  text-decoration: none;
  color: #7a7a7a;
  font-size: 0.8em;
  font-weight: 700;
}
@media (min-width: 700px) {
  .header-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: 0 15%;
  }
}

@media (max-width: 700px) {
  .header-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: 0 5%;
  }
}

.logo {
  font-size: 1.1em;
  color: #5a5a5a;
  font-weight: bold;
}

.logo-destaque {
  color: #8d36b8;
}

.shopping {
  display: flex;
  align-items: center;
}
</style>