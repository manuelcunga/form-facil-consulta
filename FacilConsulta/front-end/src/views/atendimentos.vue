<template>
  <div>
   <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 mt-5 ">
          <h1 class="title-atendimento">{{atendimento.title}} </h1>
          <h5 class="subtitle-atendimento">{{atendimento.subtTitle}} </h5>
          <form>
            <div class="atendimentos">
              <div class="input-group mb-b3 input-especialidade">
                <label>Especialidade Principal*</label>
                <select class="select-especialidade"
                 v-model="atendimentoForm.especialidade">
                  
                  <option value="">Selecione A Especialidade </option>
                  <option value="">Cardiologia </option>
                  <option value="">Dermatologia </option>
                  <option value="">Neurologia </option>
                  <option value="">Oftalmologia </option>
                  <option value="">Psiquiatria </option>
                  <option value="">Urologia</option>
                  
                </select>
              </div>
              <div class="input-group mt-3 input-preco">
                <label>{{constulta.title}} </label>
                <!--<div class="input-group-prepend">
                  <span class="input-group-text">R$</span>
                </div> -->
                <input type="text" placeholder="Valor" class="preco-input" 
                  v-model="atendimentoForm.preco"
                aria-label="Quantia" />
              </div>
              <div class="input-group mt-3 pagamento-area">
                <label for="">{{constulta.label}} </label>
                <div class="option-pix mt-3" >
                  <input type="checkbox" 
                  v-model="atendimentoForm.formaPagamento" />
                  
                  <label>{{constulta.pix}} </label>
                </div>
                <div class="option-dinheiro mt-4">
              
                 <input type="checkbox" v-on:click="showOptionMoney" />
                  <label class="">{{pagamentoForm.form1}} </label>
                </div>
                <div class="credito mt-4" v-if="formaPagamento" 
                  key="validacao">
                  <div class="option-money" >
                    <input type="checkbox"  checked/>
                    <label class="">{{pagamentoForm.form2}} </label>
                  </div>
                  <div class="pagamento-form" >
                    <label>{{parlamento.title}} </label>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="opcao1"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios1">
                       {{parlamento.option1}}
                      </label>
                    </div>
                    
                     <div class="form-check mt-2">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="opcao1"
                      />
                      <label class="form-check-label" for="exampleRadios1">
                       {{parlamento.option2}}
                      </label>
                    </div> 
                    <div class="form-check mt-2">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="opcao1"
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        {{parlamento.option3}}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
              <div class="next mt-4 mb-5">
                <button type="submit" class="button">PRÓXIMO</button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-6 draw-img">
          <img :src="imgForm" width="594" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../design/components/atendimento/atendimento.css";
  import ApiService from '../services/service'

export default {
    name: 'Atendimentos',
    components:{
    // Atendiment
  },
  data(){
     return {
      atendimentoForm:{
        especialidade: '',
        preco: '',
        formaPagamento: ''
      },
      formaPagamento: false,
      atendimento:{
        title: 'Sobre o Atendimento',
        subtTitle: 'Detalhes do Atendimento'
      },
      inputGroup:{
        
      },
      constulta:{
        title: 'Informe o valor da consulta* ',
        label: 'Formas de Pagamentos da Consulta*',
        pix: 'Pix',
      },
      pagamentoForm:{
        form1: 'Em dinheiro',
        form2: 'Cartão de Crédito',
      },
      parlamento:{
        title: 'Parcelamento Em',
        option1: ' 1x, sem juros',
        option2: ' 2x, sem juros',
        option3: ' 3x, sem juros',
      },
      imgForm: require('../assets/img/atendiment.png')
    };
  },
  methods:{
    showOptionMoney(){
      this.formaPagamento = !this.formaPagamento
    }
  }
}
</script>

