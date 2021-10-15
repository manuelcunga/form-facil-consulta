import { Router } from "express"
import { CreateAtendimentoController } from "../controllers/atendimentos/CreateAtendimentoController"
const atendimento = Router()

const newAtendimento = new CreateAtendimentoController()

atendimento.use('/',newAtendimento.handle)

export { atendimento }


