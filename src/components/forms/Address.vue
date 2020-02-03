<template>
  <div class>
    <form>
      <div class>
        <label for>Nome</label>
        <input type="text" v-model.lazy.trim="user.name" />
      </div>
      <div class>
        <label for>Email</label>
        <input type="email" />
      </div>
      <div class>
        <label for>CPF</label>
        <input type="tel" required v-mask="'###.###.###-##'" />
      </div>
      <div class>
        <label for>Data Nascimento</label>
        <input type="date" required />
      </div>
      <div class>
        <label for>Telefone</label>

        <input type="tel" required v-mask="['(##) ####-####', '(##) #####-####']" />
      </div>
      <div class>
        <label for>CEP</label>
        <input
          type="tel"
          v-mask="'#####-###'"
          v-model="user.cep"
          @change="getAddressByCep"
          required
        />
      </div>
      <div class>
        <label for>Endereço</label>
        <input type="text" v-model="user.address" required />
      </div>
      <div class>
        <label for>Número</label>
        <input type="number" v-model="user.number" required />
      </div>
      <div class>
        <label for>Complemento</label>
        <input type="text" v-model="user.complement" required />
      </div>
      <div class>
        <label for>Bairro</label>
        <input type="text" v-model="user.neighborhood" required />
      </div>
      <div class>
        <label for>Cidade</label>
        <input type="text" v-model="user.city" required />
      </div>
      <div class>
        <label for>Estado</label>
        <input type="text" v-model="user.state" required />
      </div>
      <button @submit.prevent="setShowModal">{{nameButton}}</button>
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

<style>
</style>