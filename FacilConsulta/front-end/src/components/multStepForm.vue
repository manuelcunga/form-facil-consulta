<template>
  <div class="container">
    <router-link  to="" class="mt-3 btn-voltar">
        <i class="fa fa-angle-left fa-3x" 
           v-if="currentStep !== 0"
          v-on:click="previous"
        aria-hidden="true">
        </i>
      </router-link>
    <div v-if="!submitted">
      <component
        v-bind:is="steps[currentStep].component"
        v-bind:formValue="formValue[steps[currentStep].label]"
        @formValueChange="updateFormValue"
      />
      
      <div class="input-group input-form mt-3  next">
           <button
          type="submit"
          v-if="currentStep < steps.length - 1"
          v-on:click="next"
          class="button">
          PRÓXIMO
        </button>         
      
        <button v-else class="btn-profissional">
      <router-link to="/parabens">
         CADASTRAR PROFISSIONAL
     </router-link>

        
        </button>
        </div>
    </div>
  </div>
</template>

<script>
import Cadastro from "../components/profissional/cadastro.vue";
import AtendimentoForm from "../components/atendimento/formularioAtendi.vue";
import ListaProfissional from "../components/revisao/ListarProfissional.vue";

export default {
  name: "MultiSteps",
  data() {
    return {
      currentStep: 0,
      submitted: false,
      formValue: {
        usuario: {
          nome: null,
          cpf: null,
          celular: null,
          estado: null,
          cidade: null
        },
        atendimentoForm: {
          especialidade: null,
          preco: null,
          formaPagamento: null
        },
        profissionals: []
      },
      steps: [
        {
          component: Cadastro,
          label: "cadastro"
        },
        {
          component: AtendimentoForm,
          label: "atendimento"
        },
        {
          component: ListaProfissional,
          label: "profile"
        }
      ]
    };
  },
  methods: {
    next() {
      this.currentStep += 1;
    },
    previous() {
      this.currentStep -= 1;
    },
    updateFormValue(payload) {
      this.formValue = {
        ...this.formValue,
        [payload.label]: payload.data
      };
    },
    NewProfissional() {
      alert("Funcionando")
      console.log(this.formValue)
    }
  },
  components: [Cadastro, AtendimentoForm, ListaProfissional]
};
</script>
