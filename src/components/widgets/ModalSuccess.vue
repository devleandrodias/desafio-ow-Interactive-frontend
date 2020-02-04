<template>
  <div id="myModal" class="modal" v-if="isShowModal">
    <div class="modal-content">
      <span class="close" @click="isShowModal = !isShowModal">&times;</span>
      <img src="../../../static/assets/tick.svg" />
      <p>Seu cadastro foi realizado com sucesso!</p>
      <router-link to="/">
        <a>
          <p style="marginTop: 15px;" @click="cleanProductsShoppingCart">Voltar para home</p>
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    cleanProductsShoppingCart() {
      return this.$store.dispatch("cleanProductsShoppingCart");
    }
  },
  props: {
    isShowModal: {
      type: Boolean,
      required: true,
      default: false
    }
  }
};
</script>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  border-radius: 15px;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 25%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

a {
  color: #8d36b8;
  text-align: center;
}

p {
  font-size: 1.2em;
  text-align: center;
}

img {
  height: 150px;
  width: 100%;
  text-align: center;
  padding-top: 0px;
}
</style>