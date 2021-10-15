import { createStore } from 'vuex'

export default createStore({
    state: {
        profissional: {
            nome: '',
            cpf: '',
            telefone: '',
            estado: '',
            cidade: '',
        },
    },
    mutations: {

    },
    actions: {
        cadastro({ comit }, dados) {
            // api.post('/profissional')
            console.log(dados)
        }
    },
    modules: {

    }
})