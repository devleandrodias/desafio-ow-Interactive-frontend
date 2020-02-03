<template>
  <div class="address">
    <form class="address-form">
      <div class="col-6">
        <div class="group-input">
          <div class="input-itens">
            <label for>Nome</label>
            <input type="text" v-model.lazy.trim="user.name" />
          </div>
        </div>
        <div class="group-input">
          <div class="input-itens">
            <label for>Email</label>
            <input type="email" />
          </div>
        </div>
        <div class="group-input">
          <div class="input-itens">
            <label for>CPF</label>
            <input type="tel" required v-mask="'###.###.###-##'" />
          </div>
        </div>
        <div class="group-input">
          <div class="input-itens">
            <label for>Data Nascimento</label>
            <input type="date" required />
          </div>
          <div class="input-itens">
            <label for>Telefone</label>
            <input type="tel" required v-mask="['(##) ####-####', '(##) #####-####']" />
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="group-input">
          <div class="input-itens">
            <label for>CEP</label>
            <input
              type="tel"
              v-mask="'#####-###'"
              v-model="user.cep"
              @change="getAddressByCep"
              required
            />
          </div>
        </div>
        <div class="group-input">
          <div class="input-itens">
            <label for>Endereço</label>
            <input type="text" v-model="user.address" required />
          </div>
          <div class="input-itens">
            <label for>Número</label>
            <input type="number" v-model="user.number" required />
          </div>
        </div>
        <div class="group-input">
          <div class="input-itens">
            <label for>Complemento</label>
            <input type="text" v-model="user.complement" required />
          </div>
          <div class="input-itens">
            <label for>Bairro</label>
            <input type="text" v-model="user.neighborhood" required />
          </div>
        </div>
        <div class="group-input">
          <div class="input-itens">
            <label for>Cidade</label>
            <input type="text" v-model="user.city" required />
          </div>
          <div class="input-itens">
            <label for>Estado</label>
            <input type="text" v-model="user.state" required />
          </div>
        </div>
        <button @submit.prevent="setShowModal">{{nameButton}}</button>
      </div>
    </form>
    <app-modal v-show="isShowModal" />
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
    setShowModal() {
      this.isShowModal = true;
    }
  },
  directives: { mask }
};
</script>

<style scoped>
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