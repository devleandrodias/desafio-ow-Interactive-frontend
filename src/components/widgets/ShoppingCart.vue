<template>
  <div class>
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
          <td>
            <img src="https://i.ibb.co/B4xmk45/1.jpg" alt="shopping-cart" height="15px" />
          </td>
          <td class="product">
            <span class="category">{{product.category}}</span>
            <span class="product-item">{{product.name}}</span>
          </td>
          <td>
            <div class="buttons-calculator">
              <button class="button-more-less button-less" type="button">-</button>
              <input class="value-total" type="number" value="01" />
              <button class="button-more-less button-more" type="button">+</button>
            </div>
          </td>
          <td class="money">
            <strong>
              R${{
              sightValueUnit
              }}
            </strong> à vista
            <br />
            ou {{quantityParcel}}x R${{
            parcelValueUnit
            }}
          </td>
          <td class="money">
            <strong>
              R${{
              sightValue
              }}
            </strong> à vista
            <br />
            ou {{quantityParcel}}x R${{
            parcelValue
            }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td class="transform-up">
            Total a vista
            <br />Total Parcelado
          </td>
          <td class="price-total">
            R${{valueTotal}}
            <br />
            <div class="value-parceled">
              em até
              <strong>
                {{quantityParcel}}x R${{valueTotalParcel}}
                <br />
                (Total R${{valueTotal}})
              </strong>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
    <div class="display-footer">
      <div class="clean-cart">
        <!-- <img
            src="../../../assets/garbage.svg"
            alt="shopping-cart"
            height="15px"
            style="cursor: pointer;"
        />-->
        <span class="clean-cart-text">Limpar carrinho</span>
      </div>
      <div class="buttons-continue-finnaly">
        <router-link to="/" exact tag="button" class="button continue">Continuar comprando</router-link>
        <router-link to="/checkout" exact tag="button" class="button finnaly">Concluir compra</router-link>
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
  }
};
</script>

<style>
table {
  text-align: left;
  width: 100%;
}

th {
  padding: 15px;
  text-transform: uppercase;
  font-weight: 500;
}

td {
  border-top: 1px solid #bbbbbb;
  padding: 10px;
}

input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
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
  text-transform: uppercase;
  font-size: 0.7em;
  text-align: right;
  font-weight: 600;
  padding: 25px;
}

.product {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  font-size: 0.8em;
}

.category {
  font-size: 0.8em;
  font-weight: 700;
  color: #8d36b8;
  padding-bottom: 5px;
}

.product-item {
  font-size: 0.9em;
  font-weight: 600;
}

.money {
  font-size: 0.7em;
}

.button {
  padding: 15px 75px;
  border: none;
  border-radius: 3px;
  margin: 5px;
  outline: none;
  cursor: pointer;
}

.continue {
  background-color: #cfcfcf;
  color: black;
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
  margin-top: 15px;
}

.clean-cart-text {
  font-size: 0.7em;
  color: #777777;
  font-weight: 500;
  cursor: pointer;
}
</style>