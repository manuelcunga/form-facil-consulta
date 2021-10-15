// import Vue from 'vue';
// import Vuex from 'vuex';
// import { api } from '../services/api';

// Vue.use(Vuex);

// export default new Vuex.Store({
//     strict: true,
//     state: {
//         profissional: {
//             nome: '',
//             cpf: '',
//             telefone: '',
//             estado: '',
//             cidade: '',
//         },
//     },
//     mutations: {

//     },
//     actions: {
//         async cadastro(profissional) {
//             try {
//                 const insert = await api.post('/profissional', profissional)
//                 console.log(insert.data)
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//     }
// });