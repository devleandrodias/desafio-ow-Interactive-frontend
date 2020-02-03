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
                <img src="../../../static/assets/garbage.svg" alt="garbage" />
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
                    @click="quantityItems > 1 && quantityItems--"
                  >-</button>
                  <input class="value-total" type="number" :value="1" disabled />
                  <button
                    class="button-more-less button-more"
                    type="button"
                    @click="quantityItems++"
                  >+</button>
                </div>
              </td>
              <td class="td-itens">
                <strong>
                  R$
                  {{
                  product.price
                  }}
                </strong> à vista
                <br />ou
                <strong>{{quantityParcel}}x R$2.234,25</strong>
                <!-- {{
                parcelValueUnit
                }}-->
              </td>
              <td class="td-itens">
                <strong>
                  R$12.245,97
                  <!-- {{
                  sightValue
                  }}-->
                </strong> à vista
                <br />ou
                <strong>{{quantityParcel}}x R$1.223,9</strong>
                <!-- {{
                parcelValue
                }}-->
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
                R$22.234,87
                <!-- {{getValueTotal}} -->
                <br />
                <div class="value-parceled">
                  em até
                  <strong>
                    {{quantityParcel}}
                    x R$1.123,34
                    <!-- {{valueTotalParcel}} -->
                    <br />(Total R$234,25
                    <!-- {{getValueTotal}} -->
                    )
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
    <div class="mobile">
      <div class="card-mobile" v-if="dataArrayProducts.length > 0">
        <div class="card">
          <div class="product-item" v-for="product in dataArrayProducts" :key="product">
            {{setPriceItem(product.price)}}
            <div class="category-product">{{product.category}}</div>
            <div class="name-product">{{product.name}}</div>
            <div class="quantity-itens-product">
              <div class="buttons-calculator">
                <button
                  class="button-more-less button-less"
                  type="button"
                  @click="quantityItems > 1 && quantityItems--"
                >-</button>
                <input class="value-total" type="number" :value="1" disabled />
                <button
                  class="button-more-less button-more"
                  type="button"
                  @click="setUpdateQuantityItens(dataArrayProducts.indexOf(product), (product.quantity + 1))"
                >+</button>
              </div>
            </div>Valor Unitário
            <hr />
            <div class="sight-value-unit-product">
              <span>
                Valor a vista
                <strong>R${{product.price}}</strong>
              </span>
            </div>
            <div class="parceled-value-unit-product">
              <span>
                Valor parcelado em
                <strong>10X R${{parcelValueUnit(product.quantity)}}</strong>
              </span>
            </div>Valor Total
            <hr />
            <div class="sight-value-total-product">
              <span>
                Valor total a vista
                <strong>R${{sightValue(product.quantity)}}</strong>
              </span>
            </div>
            <div class="parceled-value-total-product">
              <span>
                Valor total em
                <strong>
                  10X
                  R${{parcelValue(product.quantity)}}
                </strong>
              </span>
            </div>
          </div>
          <div class="sight-value-total-products">Valor total da compra</div>
          <div class="parceled-value-total-products">Valor total da compra parcelado</div>
        </div>
        <div class="buttons-continue-finnaly">
          <button class="button continue" @click="cleanProductsShoppingCart()">Limpar carrinho</button>
          <router-link to="/" exact tag="button" class="button continue">Continuar comprando</router-link>
          <router-link to="/checkout" exact tag="button" class="button finnaly">Concluir compra</router-link>
        </div>
      </div>
      <div class="card-empty" v-else>
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
    parcelValueUnit() {
      return this.priceItem / this.quantityParcel;
    },
    sightValue(payload) {
      return (payload * this.priceItem).toFixed(2);
    },
    parcelValue(payload) {
      return (
        (parseInt(payload) * this.priceItem).toFixed(2) / this.quantityParcel
      );
    },
    setUpdateQuantityItens(index, value) {
      return this.$store.dispatch("setUpdateQuantityItens", { index, value });
    },
    cleanProductsShoppingCart() {
      return this.$store.dispatch("cleanProductsShoppingCart");
    },
    getQuantityItem() {
      return this.$store.getters.getQuantityItem;
    }
  },
  computed: {
    getValueTotal() {
      return this.$store.getters.getValueTotal;
    }
  }
};
</script>

<style scoped>
/**
  Mobile 
 */
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

/**
  Grid
  */

@media (min-width: 700px) {
  .mobile {
    display: none;
  }
}

@media (max-width: 700px) {
  .grid {
    display: none;
  }
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