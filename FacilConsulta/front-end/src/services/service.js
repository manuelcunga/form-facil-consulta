import { http } from './api.js'

export default {
    async Salvando(usuario) {
        try {
            const cadastro = await http.post('/profissional', usuario)
            return cadastro.data
        } catch (error) {
            console.log(error)
        }
    },
    async listar() {
        try {
            return await http.get('/profissional')
        } catch (error) {
            console.log(error)
        }
    },

    async atualizar(id) {
        try {
            const atualizar = await http.put(`/profissional/${id}`)
            return atualizar.data
        } catch (error) {
            console.log(error)
        }
    }

}