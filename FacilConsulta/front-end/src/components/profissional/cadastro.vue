<template>
  <section>
    <div class="main">
      <div class="container">
        <div class="row mt-3 form-divisao">
          <div class="col-md-6 ">
            <form @submit.prevent="CreateProfissional">
              <h2>{{ ProfissionalInfo.title }}</h2>
              <h3 class="mt-4">{{ ProfissionalInfo.subTitle }}</h3>
              <div class="profissional-content">
                <div class="input-group input-form">
                  <label for="">{{ inputGroupLabels.labelName }} </label>
                  <input
                    type="text"
                    class="input-nome"
                    id="nome"
                    v-model="usuario.nome"
                    placeholder="Digite seu nome completo"
                    :class="{ 'is-invalid': isSubmitted && $v.usuario.nome.$error }"
                  />
                  <div v-if="isSubmitted && !$v.usuario.nome.required" class="invalid-fedback">
                    Nome é obrigatorio!
                  </div>
                </div>
                <div class="input-group input-form mt-4">
                  <label for="">{{ inputGroupLabels.cpfName }} </label>
                  <input
                    type="text"
                    class="input-cpf"
                    id="cpf"
                    v-model="usuario.cpf"
                    placeholder="Digite um CPF"
                    :class="{ 'is-invalid': isSubmitted && $v.usuario.cpf.$error }"
                  />
                  <div v-if="isSubmitted && !$v.usuario.cpf.required" class="invalid-fedback">
                    CPF é obrigatorio!
                  </div>
                </div>
                <div class="input-group input-form mt-4">
                  <label for="">{{ inputGroupLabels.telefne }} </label>
                  <input
                    type="text"
                    class="input-celular"
                    id="celular"
                    v-model="usuario.celular"
                    placeholder="(00)0 0000-0000"
                    :class="{ 'is-invalid': isSubmitted && $v.usuario.celular.$error }"
                  />
                  <div v-if="isSubmitted && !$v.usuario.celular.required" class="invalid-fedback">
                    celular é obrigatorio!
                  </div>
                </div>
                <div class="input-group input-form mt-4">
                  <div class="localizacao">
                    <div class="estado">
                      <label for="">{{ inputGroupLabels.estado }} </label>
                      <select
                        v-model="usuario.estado"
                        :class="{ 'is-invalid': isSubmitted && $v.usuario.estado.$error }"
                      >
                        <option value="" selected>Selecione</option>
                        <option value="Rio Grande do sul">Rio Grande do sul</option>
                        <option value="Santa Catarina">Santa Catarina</option>
                      </select>

                      <div
                        v-if="isSubmitted && !$v.usuario.estado.required"
                        class="invalid-fedback"
                      >
                        celular é obrigatorio!
                      </div>
                    </div>
                    <div class="cidade">
                      <label for="">{{ inputGroupLabels.cidade }} </label>
                      <select
                        v-model="usuario.cidade"
                        :class="{ 'is-invalid': isSubmitted && $v.usuario.cidade.$error }"
                      >
                        <option value="" selected>Selecione</option>
                        <option value="Londrina">Londrina</option>
                        <option value="Maringá">Maringá </option>
                        <option value="Pelotas">Pelotas </option>
                        <option value="Porto Alegre">Porto Alegre </option>
                        <option value="Florianópolis">Florianópolis</option>
                        <option value="Joinville">Joinville </option>
                      </select>
                      <div
                        v-if="isSubmitted && !$v.usuario.cidade.required"
                        class="invalid-fedback"
                      >
                        celular é obrigatorio!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div class="col-md-6 mt-5">
            <img :src="imgForm" class="mt-5 bg-cadastro " width="592" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import "../../design/components/profissional/Cadastrar.css";
import ApiService from "../../services/service";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      isSubmitted: false,
      usuario: {
        nome: null,
        cpf: null,
        celular: null,
        estado: null,
        cidade: null
      },
      error: [],
      SelectEstado: "Selecione",
      ProfissionalInfo: {
        title: "Sobre o Profissional",
        subTitle: "Dados do Profissional"
      },
      inputGroupLabels: {
        labelName: "Nome Completo*",
        cpfName: "CPF*",
        telefne: "Número de Celular*",
        estado: "Estado*",
        cidade: "Cidade*"
      },
      imgForm: require("../../assets/img/medicine.svg")
    };
  },

  props: {},

  validions: {
    usuario: {
      nome: { required },
      cpf: { required },
      celular: { required },
      estado: { required },
      cidade: { required }
    }
  },
  methods: {
    handleSubmited() {},
    async CreateProfissional() {
      this.isSubmitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$swal("oops!", "Você precisa preencher todos os campos");
      }

      if (!this.usuario.id) {
        ApiService.Salvando(this.usuario);

        this.$swal({
          title: "Profissional Criado com sucesso!",
          icon: "success",
          showConfirmatton: true,
          allowOutSideClick: false,
          allowEnterKey: true,
          allowEscapeKey: false
        }).then(data => {
          this.$router.push({
            name: "atendimentos"
          });
        });
      } else {
        ApiService.atualizar(this.usuario)
          .then(response => {
            this.usuario = {};
            alert("Atualizado com sucesso");
          })
          .catch(e => {
            console.log(e.response.data.error);
          });
      }
    }
  },
  onChange(e) {
    this.$emit("formValueChange", {
      label: "information",
      data: {
        ...this.usuario,
        [e.target.name]: e.target.value
      }
    });
  }
};
</script>
