<template>
  <div class="card">
    <img :src="imageUrl" />
    <span class="category">{{category}}</span>
    <span class="product">{{product}}</span>
    <p class="description">{{description}}</p>
    <span class="price">R${{price}}</span>
    <button
      @click="addItensCart(category, product, description, price, quantity)"
    >Adicionar ao carrinho</button>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
      default:
        "https://fistiktekstil.com/blog/wp-content/uploads/2019/12/img.jpg"
    },
    category: {
      type: String,
      required: true,
      default: ""
    },
    product: {
      type: String,
      required: true,
      default: ""
    },
    description: {
      type: String,
      required: true,
      default: ""
    },
    price: {
      type: String,
      required: true,
      default: "0"
    },
    quantity: {
      type: Number,
      required: true,
      default: 1
    }
  },
  computed: {
    addItensCart({ category, description, price, quantity }) {
      const priceFloat = price.replace(".", "").replace(",", ".");

      return this.$store.dispatch("setProductsShoppingCart", {
        name: description,
        price: parseFloat(priceFloat).toFixed(2),
        picture: "https://i.ibb.co/B4xmk45/1.jpg",
        category,
        quantity
      });
    }
  }
};
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  border-radius: 3px;

  -webkit-box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.75);
}

img {
  align-self: center;
  width: 100%;
  padding: 20px;
}

button {
  display: flex;
  background-color: #fffeff;
  border: none;
  padding: 25px;

  align-items: center;
  justify-content: center;
  color: #8d36b8;
  font-weight: 600;
  font-size: 0.8em;
  border-radius: 0px 0px 4px 4px;

  border-top: 1px solid #ddd;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s ease-out;
  outline: none;
}

button:hover {
  color: #fffeff;
  border-top: 1px solid #8d36b8;
  background-color: #8d36b8;
  transition: 0.3s ease-in;
  outline: none;
}

.price {
  padding: 10px 20px 20px 20px;
  font-weight: bolder;
}

.category {
  font-size: 0.8em;
  color: #8d36b8;
  font-weight: bold;
  padding: 6px 20px;
}

.product {
  font-size: 0.9em;
  padding: 6px 20px;
  font-weight: bold;
}

.description {
  font-size: 0.8em;
  padding: 6px 20px;
  padding-top: 0px;
  color: #bbbbbb;
}
</style>