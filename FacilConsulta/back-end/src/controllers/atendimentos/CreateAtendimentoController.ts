import { Request, Response } from "express"
import * as Yup from 'yup'
import { AtendimentoService } from "../../services/AtendimentoService"

export class CreateAtendimentoController{
  async handle(request:Request,response:Response){
    
    const Validation = Yup.object().shape({
      especialidade:Yup.string().required(),
      preco: Yup.number().required(),
      formas_consulta: Yup.string().required(),
    })
    
    if(!(await Validation.isValid(request.body))){
      return response.status(400).json({
        error: 'Ups, campos inválidos'
      })
    }

    const { especialidade,preco,formas_consulta} = request.body
   
    try {
      
      const atendimentos = new AtendimentoService()
      const newAtendimento = await atendimentos.Execute({
        especialidade,
        preco,
        formas_consulta,
      })
      return response.status(201).json(newAtendimento)
      
    } catch (error) {
      return response.status(400).json({
        erro: error.message
      })
    }
  }
}