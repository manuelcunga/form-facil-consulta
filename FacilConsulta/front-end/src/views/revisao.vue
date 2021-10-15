<template>
  <div class="container mt-5">
    <div class="direcao">
      <router-link to="/"> <i class="fa fa-angle-left fa-3x" aria-hidden="true"></i></router-link>
    </div>
    <div class="row mt-5">
      <div class="col-md-6">
        <h1>{{ listProfissional.title }}</h1>
        <ul>
          <li v-for="profission of profissionals" :key="profission.id">
            <span>{{ listProfissional.titleName }} </span>
            <p>{{ profission.nome }}</p>
            <span>CPF </span>
            <p>{{ profission.cpf }}</p>

            <span>Eelular </span>
            <p>{{ profission.celular }}</p>

            <span>Estado </span>
            <p>{{ profission.estado }}/ {{ profission.cidade }}</p>
          </li>
        </ul>
        <div class="buttons">
          <button class="btn-profissional">CADASTRAR PROFISSIONAL</button>

          <button class="btn-editar mt-3" @click="editar(profissiona)">EDITAR CADASTRO</button>
        </div>
      </div>
      <div class="col-md-6">
        <img :src="listProfissional.imgDraw" width="720" />
      </div>
    </div>
  </div>
</template>

<script>
import "../design/components/revissao/revisao.css";
import ApiService from "../services/service";

export default {
  name: "Revisao",
  components: {
    // RevisaopProfissional
  },
  data() {
    return {
      profissionals: [],

      listProfissional: {
        title: "Revisão do Cadastro",
        titleName: "Nome Completo",
        CpfName: "CPF",
        telefoneName: "Número do Celular ou Telefone",
        localizacaoName: "Estado/Cidade",
        especialidadeName: "Especialidade Principal",
        precoName: "Preço Da Consulta",
        formPgamentoName: "Formas de Pagamento da Consulta",
        imgDraw: require("../assets/img/atendimento.svg")
      }
    };
  },
  mounted() {
    this.listProfissionais();
  },
  methods: {
    async editar(profissiona) {
      this.usuario = profissiona;
    },
    async listProfissionais() {
      const response = await ApiService.listar();
      this.profissionals = response.data
    }
  }
};
</script>
