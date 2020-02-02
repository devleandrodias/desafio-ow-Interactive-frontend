<template>
  <div class="cards">
    <app-card-product
      v-for="product in products"
      :key="product"
      :imageUrl="product.picture"
      :category="'Eletrônicos'"
      :product="'Notebook'"
      :description="product.name"
      :price="product.price"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CardProduct from "../components/widgets/CardProduct";

export default {
  components: {
    appCardProduct: CardProduct
  },
  computed: {
    ...mapGetters({
      products: "getProducts"
    })
  },
  created() {
    this.$http.get().then(response => {
      this.$store.dispatch("setProductsStore", response.data);
    });
  }
};
</script>

<style >
@media (min-width: 700px) {
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    height: 123px;
  }
}

@media (max-width: 700px) {
  .cards {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 25px 0px;
    margin: 5% 0%;
  }
}
</style>