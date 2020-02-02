<template>
  <div class="shopping-cart">
    <app-shopping-cart :dataArrayProducts="products" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ShoppingCart from "../components/widgets/ShoppingCart";

export default {
  components: {
    appShoppingCart: ShoppingCart
  },
  computed: {
    ...mapGetters({
      products: "getProductsShoppingCart"
    })
  }
};
</script>

<style>
.shopping-cart {
  margin: 50px 0;
}
</style>