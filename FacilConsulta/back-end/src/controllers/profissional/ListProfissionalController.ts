import { Request, Response } from 'express';
import { ListProfissionalService } from '../../services/listProfissional';

export class ListProfissionalController{
  public async handle(request:Request,response:Response){
   
    const listProfissionalService = new ListProfissionalService()
    const result = await listProfissionalService.execute()
    
    if(result){
    return response.json(result)
    }else{
      return response.json('Sem dados cadastrados!')
    }
  }
}