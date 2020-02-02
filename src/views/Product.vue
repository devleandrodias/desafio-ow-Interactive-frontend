<template>
  <app-card-product />
</template>

<script>
import CardProduct from "../components/widgets/CardProduct";

export default {
  components: {
    appCardProduct: CardProduct
  },
  data() {
    return {
      data: null
    };
  },
  created() {
    this.$http.get().then(res => {
      this.data = res.data;
    });
  }
};
</script>
