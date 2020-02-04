<template>
  <div class="shopping-cart">
    <div class="grid">
      <div class v-if="dataArrayProducts.length > 0">
        <table cellspacing="0">
          <thead>
            <tr>
              <th></th>
              <th>Produtos</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in dataArrayProducts" :key="product">
              {{setPriceItem(product.price)}}
              <td>
                <img
                  src="../../../static/assets/garbage.svg"
                  alt="garbage"
                  @click="removeProductShoppingCart(dataArrayProducts.indexOf(product))"
                />
              </td>
              <td class="td-itens">
                <div class="group-itens">
                  <span class="category-grid">{{product.category}}</span>
                  <span class="product-item-grid">{{product.name}}</span>
                </div>
              </td>
              <td>
                <div class="buttons-calculator">
                  <button
                    class="button-more-less button-less"
                    type="button"
                    @click="setUpdateQuantityItens(dataArrayProducts.indexOf(product), (product.quantity - 1))"
                  >-</button>
                  <input
                    class="value-total"
                    type="tel"
                    min="1"
                    :value="getQuantityItensByIndex(dataArrayProducts.indexOf(product))"
                    disabled
                  />
                  <button
                    class="button-more-less button-more"
                    type="button"
                    @click="setUpdateQuantityItens(dataArrayProducts.indexOf(product), (product.quantity + 1))"
                  >+</button>
                </div>
              </td>
              <td class="td-itens">
                <strong>
                  {{
                  product.price | money
                  }}
                </strong> à vista
                <br />ou
                <strong>
                  {{quantityParcel}}x {{
                  parcelValueUnit(product.price) | money
                  }}
                </strong>
              </td>
              <td class="td-itens">
                <strong>
                  {{
                  sightValue(product.quantity, product.price) | money
                  }}
                </strong> à vista
                <br />ou
                <strong>
                  {{quantityParcel}}x
                  {{
                  parcelValue(product.quantity, product.price) | money
                  }}
                </strong>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td class="transform-up">
                <span class="margin-text">Total a vista</span>
                <br />
                <span class="margin-text">Total Parcelado</span>
              </td>
              <td class="price-total">
                {{getValueTotal() | money}}
                <br />
                <div class="value-parceled">
                  em até
                  <strong>
                    {{quantityParcel}}
                    x {{valueTotalParcel() | money}}
                    <br />
                    (Total {{getValueTotal() | money}})
                  </strong>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
        <div class="display-footer">
          <div class="clean-cart">
            <img src="../../../static/assets/garbage.svg" alt />
            <span class="clean-cart-text" @click="cleanProductsShoppingCart()">Limpar carrinho</span>
          </div>
          <div class="buttons-continue-finnaly">
            <router-link to="/" exact tag="button" class="button continue">Continuar comprando</router-link>
            <router-link to="/checkout" exact tag="button" class="button finnaly">Concluir compra</router-link>
          </div>
        </div>
      </div>
      <div v-else class="card-empty">
        <span>Carrinho Vazio</span>
        <router-link to="/" exact tag="button" class="button finnaly">Continuar comprando</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataArrayProducts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      quantityParcel: 10,
      priceItem: 0
    };
  },
  methods: {
    setPriceItem(payload) {
      const novoValor = payload.replace(".", "").replace(",", ".");
      this.priceItem = parseFloat(novoValor);
    },
    parcelValueUnit(price) {
      return parseFloat(price) / this.quantityParcel;
    },
    sightValue(quantityItens, priceItem) {
      return (parseInt(quantityItens) * priceItem).toFixed(2);
    },
    parcelValue(quantityItens, priceItem) {
      return (
        (parseInt(quantityItens) * priceItem).toFixed(2) / this.quantityParcel
      );
    },
    setUpdateQuantityItens(index, value) {
      return this.$store.dispatch("setUpdateQuantityItens", { index, value });
    },
    cleanProductsShoppingCart() {
      return this.$store.dispatch("cleanProductsShoppingCart");
    },
    removeProductShoppingCart(index) {
      return this.$store.dispatch("removeProductShoppingCart", index);
    },
    valueTotalParcel() {
      const array = this.$store.getters.getArray;

      return (
        array
          .map(p => p.quantity * p.price)
          .reduce((total, value) => total + value, 0)
          .toFixed(2) / this.quantityParcel
      );
    },
    getQuantityItensByIndex(index) {
      let array = this.$store.getters.getArray;
      const { quantity } = array[index];
      return quantity;
    },
    getValueTotal() {
      const array = this.$store.getters.getArray;

      return array
        .map(p => p.quantity * p.price)
        .reduce((total, value) => total + value, 0)
        .toFixed(2);
    },
    getValueTotalParcel() {
      const array = this.$store.getters.getArray;

      return array
        .map(p => p.quantity * p.price)
        .reduce((total, value) => total + value, 0)
        .toFixed(2);
    }
  }
};
</script>

<style scoped>
.card {
  background-color: #fffeff;
  padding: 10px;
}

.product-item-grid {
  width: 75%;
  font-weight: 700;
}

.product-item {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 0.5px solid #cfcfcf;
  -webkit-box-shadow: 0px 0px 25px -20px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 25px -20px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 25px -20px rgba(0, 0, 0, 0.75);
}

.category-product {
  color: #8d36b8;
  font-size: 1em;
  padding: 5px 5px 0px 5px;
}

.name-product {
  text-align: justify;
  padding: 5px;
}

span {
  font-weight: 100;
}

strong {
  font-size: 0.9em;
}

hr {
  border: 0.5px solid #cfcfcf;
}

table {
  text-align: left;
  width: 100%;
}

th {
  padding: 15px;
  text-transform: uppercase;
  font-weight: 500;
}

img {
  size: 100%;
  padding: 0;
  height: 20px;
  width: 20px;
  cursor: pointer;
}

td:first-child {
  width: 2%;
  padding: 0;
  text-align: center;
}

td {
  border-top: 1px solid #bbbbbb;
  padding: 10px;
  width: 25%;
  text-align: left;
}

input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}

.group-itens {
  display: flex;
  flex-direction: column;
}

.card-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.card-empty span {
  padding: 100px;
  font-size: 1.2em;
}

.buttons-calculator {
  display: flex;
  align-items: center;
  justify-content: right;
}

.value-total {
  width: 40px;
  height: 35px;
  border: 0.5px solid #bbbbbb;
  background-color: #fffeff;
  text-align: center;
}

.buttons-continue-finnaly {
  display: flex;
}

.button-more-less {
  width: 30px;
  height: 35px;
  border: 0.5px solid #bbbbbb;
  background-color: #fffeff;
  padding: 2px;
  outline: none;
  cursor: pointer;
}

.button-more-less:hover {
  transition: 0.2s ease-in;
  color: #fff;
  background-color: #8d36b8;
}

.button-more {
  border-radius: 0 3px 3px 0;
  border-left: none;
  transition: 0.2s ease-out;
}

.button-more:hover {
  border-radius: 0 3px 3px 0;
  border-left: none;
  transition: 0.2s ease-in;
}

.button-less {
  border-radius: 3px 0px 0px 3px;
  border-right: none;
  transition: 0.2s ease-out;
}

.button-less:hover {
  border-radius: 3px 0px 0px 3px;
  border-right: none;
  transition: 0.2s ease-in;
}

.price-total {
  color: #8d36b8;
  font-weight: bold;
}

.transform-up {
  text-align: right;
}

.margin-text {
  text-transform: uppercase;
  font-size: 0.9em;
  font-weight: 700;
  padding-bottom: 50px;
  padding: 25px;
}

.product {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  font-size: 0.8em;
}

.category-grid {
  font-size: 0.9em;
  font-weight: 700;
  color: #8d36b8;
  margin-bottom: 5px;
}

.category {
  font-size: 0.9em;
  font-weight: 700;
  color: #8d36b8;
  padding-bottom: 5px;
}

.product-item {
  font-size: 0.9em;
  font-weight: 600;
}

.td-itens {
  font-size: 1em;
}

.button {
  padding: 15px 75px;
  border: none;
  width: 100%;
  border-radius: 3px;
  margin: 5px;
  outline: none;
  cursor: pointer;
}

.continue {
  background-color: #cfcfcf;
  color: #5e5e5e;
}

.finnaly {
  background-color: #8d36b8;
  color: #fff;
}

.display-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}

.value-parceled {
  font-size: 0.8em;
  color: black;
}

.clean-cart {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.clean-cart-text {
  font-size: 0.9em;
  color: #777777;
  font-weight: 700;
  margin-left: 15px;
  cursor: pointer;
}
</style>