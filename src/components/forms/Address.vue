<template>
  <div class="address">
    <form class="address-form" @submit.prevent="checkForm">
      <div class="col-6">
        <div class="group-input">
          <div class="input-itens">
            <div class="required">
              <label for>Nome</label>
              <samp>*</samp>
            </div>
            <input type="text" name="name" />
          </div>
        </div>
        <div class="group-input">
          <div class="input-itens">
            <div class="required">
              <label for>Email</label>
              <span>*</span>
            </div>
            <input type="email" name="email" />
          </div>
        </div>
        <div class="group-input">
          <div class="input-itens">
            <div class="required">
              <label for>CPF</label>
              <span>*</span>
            </div>
            <input type="tel" v-mask="'###.###.###-##'" name="cpf" />
          </div>
        </div>
        <div class="group-input">
          <div class="input-itens">
            <div class="required">
              <label for>Data Nascimento</label>
              <span>*</span>
            </div>
            <input type="date" name="date" />
          </div>
          <div class="input-itens">
            <div class="required">
              <label for>Telefone</label>
              <span>*</span>
            </div>
            <input type="tel" v-mask="['(##) ####-####', '(##) #####-####']" name="telephone" />
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="group-input">
          <div class="input-itens">
            <div class="required">
              <label for>CEP</label>
              <span>*</span>
            </div>
            <input
              type="tel"
              v-mask="'#####-###'"
              v-model="user.cep"
              @change="getAddressByCep"
              name="cep"
            />
          </div>
        </div>
        <div class="group-input">
          <div class="input-itens">
            <div class="required">
              <label for>Endereço</label>
              <span>*</span>
            </div>
            <input type="text" v-model="user.address" name="address" />
          </div>
          <div class="input-itens">
            <div class="required">
              <label for>Número</label>
              <span>*</span>
            </div>
            <input type="tel" v-model="user.number" name="numberAddress" />
          </div>
        </div>
        <div class="group-input">
          <div class="input-itens">
            <div class="required">
              <label for>Complemento</label>
              <span>*</span>
            </div>
            <input type="text" v-model="user.complement" name="complement" />
          </div>
          <div class="input-itens">
            <div class="required">
              <label for>Bairro</label>
              <span>*</span>
            </div>
            <input type="text" v-model="user.neighborhood" name="neighborhood" />
          </div>
        </div>
        <div class="group-input">
          <div class="input-itens">
            <div class="required">
              <label for>Cidade</label>
              <span>*</span>
            </div>
            <input type="text" v-model="user.city" name="city" />
          </div>
          <div class="input-itens">
            <div class="required">
              <label for>Estado</label>
              <span>*</span>
            </div>
            <input type="text" v-model="user.state" name="state" />
          </div>
        </div>
        <button type="submit" @submit.prevent="checkForm">{{nameButton}}</button>
      </div>
    </form>
    <app-modal :isShowModal="isShowModal" />
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import appModal from "../widgets/ModalSuccess";

export default {
  data() {
    return {
      user: {
        name: null,
        email: null,
        cpf: null,
        dateBirth: null,
        telephone: null,
        cep: null,
        address: null,
        number: null,
        complement: null,
        neighborhood: null,
        city: null,
        state: null
      },
      isShowModal: false
    };
  },
  components: {
    appModal
  },
  props: {
    nameButton: {
      type: String,
      required: true,
      default: "Enviar"
    }
  },
  methods: {
    getAddressByCep(event) {
      this.$httpCep.get(`${event.target.value}/json`).then(res => {
        this.setAddressByCep(res.data);
      });
    },
    setAddressByCep({ logradouro, complemento, bairro, localidade, uf }) {
      this.user.address = logradouro;
      this.user.complement = complemento;
      this.user.neighborhood = bairro;
      this.user.city = localidade;
      this.user.state = uf;
    },
    checkForm: function(e) {
      const name = e.target.name.value;
      const email = e.target.email.value;
      const cpf = e.target.cpf.value;
      const date = e.target.date.value;
      const telephone = e.target.telephone.value;
      const cep = e.target.cep.value;
      const address = e.target.address.value;
      const numberAddress = e.target.numberAddress.value;
      const complement = e.target.complement.value;
      const neighborhood = e.target.neighborhood.value;
      const city = e.target.city.value;
      const state = e.target.state.value;

      let formValid = false;

      if (name == "") {
        e.target.name.classList.add("invalid");
        formValid = false;
      } else {
        e.target.name.classList.add("valid");
        formValid = true;
      }

      if (email == "") {
        e.target.email.classList.add("invalid");
        formValid = false;
      } else {
        e.target.email.classList.add("valid");
        formValid = true;
      }

      if (cpf == "") {
        e.target.cpf.classList.add("invalid");
        formValid = false;
      } else {
        e.target.cpf.classList.add("valid");
        formValid = true;
      }

      if (date == "") {
        e.target.date.classList.add("invalid");
        formValid = false;
      } else {
        e.target.date.classList.add("valid");
        formValid = true;
      }

      if (telephone == "") {
        e.target.telephone.classList.add("invalid");
        formValid = false;
      } else {
        e.target.telephone.classList.add("valid");
        formValid = true;
      }

      if (cep == "") {
        e.target.cep.classList.add("invalid");
        formValid = false;
      } else {
        e.target.cep.classList.add("valid");
        formValid = true;
      }

      if (address == "") {
        e.target.address.classList.add("invalid");
        formValid = false;
      } else {
        e.target.address.classList.add("valid");
        formValid = true;
      }

      if (numberAddress == "") {
        e.target.numberAddress.classList.add("invalid");
        formValid = false;
      } else {
        e.target.number.classList.add("valid");
        formValid = true;
      }

      if (complement == "") {
        e.target.complement.classList.add("invalid");
        formValid = false;
      } else {
        e.target.complement.classList.add("valid");
        formValid = true;
      }

      if (neighborhood == "") {
        e.target.neighborhood.classList.add("invalid");
        formValid = false;
      } else {
        e.target.neighborhood.classList.add("valid");
        formValid = true;
      }

      if (city == "") {
        e.target.city.classList.add("invalid");
        formValid = false;
      } else {
        e.target.city.classList.add("valid");
        formValid = true;
      }

      if (state == "") {
        e.target.state.classList.add("invalid");
        formValid = false;
      } else {
        e.target.state.classList.add("valid");
        formValid = true;
      }

      formValid ? (this.isShowModal = !this.isShowModal) : null;
    }
  },
  directives: { mask }
};
</script>

<style scoped>
.invalid {
  outline: 0.5px solid red;
}

.valid {
  outline: none;
}

.required {
  padding: 5px;
}

.col-6 {
  display: flex;
  flex-direction: column;
}

.row-6 {
  display: flex;
  flex-direction: row;
}

.row-6:first input {
  margin: 50pwx;
}

.input-itens {
  display: flex;
  flex-direction: column;
}

label {
  color: #5a5a5a;
  padding: 5px;
}

input {
  width: 100%;
  height: 100%;
  border-radius: 3px;
  border: 0.5px solid #7a7a7a;
  padding: 10px;
}

input::-webkit-datetime-edit {
  min-width: 100%;
  width: 100%;
}

button {
  background-color: #8d36b8;
  color: #fff;
}

@media (min-width: 700px) {
  .address-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    height: 123px;
  }

  .group-input {
    display: flex;
    flex-direction: row;
    grid-template-columns: 1fr 1fr;
  }

  .input-itens {
    width: 100%;
    margin-right: 25px;
  }

  button {
    width: 47%;
    margin-left: 50%;
    margin-right: 10%;
    margin-top: 15px;
    border-radius: 5px;
  }
}

@media (max-width: 700px) {
  .address {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 25px 0px;
    margin: 5% 0%;
  }

  .group-input {
    display: flex;
    flex-direction: column;
  }

  button {
    width: 100%;
    margin-top: 15px;
    border-radius: 5px;
    margin-bottom: 0;
  }
}
</style>