import { Router } from "express"
import { CreateProfissionalControllers } from "../controllers/profissional/CreateProfissionalControllers"
import { ListProfissionalController } from '../controllers/profissional/ListProfissionalController'
import { upDateProfissionalController } from "../controllers/profissional/updateProfissional.Controller"

const profissional = Router()
const Newprofissional = new CreateProfissionalControllers()
const listProfissional = new ListProfissionalController()
const UpdateProfissional = new upDateProfissionalController()

profissional.post('/',Newprofissional.handle)
profissional.get('/',listProfissional.handle)
profissional.put('/:id',UpdateProfissional.handle)

export { profissional }


