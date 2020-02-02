<template>
  <div class="cards">
    <div class="card">
      <!-- <img src="../../../images/imac.jpg" alt srcset /> -->
      <span class="category">Eletrônicos</span>
      <span class="product">Notebook Acer Aspire 3 A315</span>
      <p class="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make
      </p>
      <span class="price">R$1.500,00</span>
      <button>Adicionar ao carrinho</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@media (min-width: 700px) {
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    /* margin: 0 15%; */
  }
}

@media (max-width: 700px) {
  .cards {
    display: grid;
    grid-template-columns: 1fr;
    /* grid-gap: 20px; */
    /* margin: 0 15%; */
  }
}

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
  max-width: 250px;
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
  transition: 0.4s ease-out;
  outline: none;
}

button:hover {
  color: #fffeff;
  border-top: 1px solid #8d36b8;
  background-color: #8d36b8;
  transition: 0.4s ease-in;
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