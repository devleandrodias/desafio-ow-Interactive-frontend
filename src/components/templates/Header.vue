<template>
  <header>
    <div class="header-main">
      <router-link to="/" exact class="logo">
        Mkt
        <span class="logo-destaque">Place</span>
      </router-link>
      <router-link to="/cart" exact>
        <div class="shopping-cart-itens">
          <a>Produtos</a>
          <div class="logo-itens">
            <img
              src="../../../static/assets/shopping-cart.svg"
              alt="shopping-cart"
              class="cart-icon"
            />
            <div class="circle quantity-item" v-show="quantityItens > 0">{{quantityItens}}</div>
          </div>
        </div>
      </router-link>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      quantityItens: "getQuantityItensCart"
    })
  }
};
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

.logo-itens {
  display: flex;
  align-items: flex-end;
}

.cart-icon {
  padding: 5px;
  padding-left: 15px;
}

.circle {
  height: 20px;
  width: 20px;
  padding: 1px 6px;
  border-radius: 50%;
  background-color: #d33b3b;

  display: flex;
  align-items: baseline;
  justify-content: center;
}

.quantity-item {
  color: #fffeff;
}

a {
  text-decoration: none;
  color: #7a7a7a;
  font-size: 0.9em;
  font-weight: 700;
}
@media (min-width: 700px) {
  .header-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: 0 10%;
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

.shopping-cart-itens {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
}
</style>