import { Request, Response } from "express"
import { updateProfissional } from "../../services/upDateProfissionalService"

export class upDateProfissionalController{
  async handle(request:Request,response:Response){
   
    const { nome,cpf,celular,estado,cidade} = request.body
   
    try {
      
      const profissional = new updateProfissional()
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