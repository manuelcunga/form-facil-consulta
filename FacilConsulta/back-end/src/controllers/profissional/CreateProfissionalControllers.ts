import { Request, Response } from "express"
// import * as Yup from 'yup'
import { ProfissionalService } from "../../services/ProfissionalService"

export class CreateProfissionalControllers{
  async handle(request:Request,response:Response){
   
    const { nome,cpf,celular,estado,cidade} = request.body
   
    try {
      
      const profissional = new ProfissionalService()
      const newProfissional = await profissional.Execute({
        nome,
        cpf,
        celular,
        estado,
        cidade
      })
      return response.status(201).json(newProfissional)
      
    } catch (error) {
      return response.status(400).json({
        erro: error.message
      })
    }
  }
}