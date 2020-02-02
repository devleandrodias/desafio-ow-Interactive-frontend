<template>
  <div class>
    <form-checkout />
    <modal-success />
  </div>
</template>

<script>
import FormCheckout from "../components/forms/FormCheckout";
import ModalSuccess from "../components/widgets/ModalSuccess";
export default {
  components: {
    formCheckout: FormCheckout,
    modalSuccess: ModalSuccess
  }
};
</script>
