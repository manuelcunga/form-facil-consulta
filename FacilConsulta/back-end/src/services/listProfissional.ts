import { getCustomRepository } from "typeorm";
import { ProfissionalRepository } from "../repositories/profissionalRepository";

export class ListProfissionalService{
 public async execute(){
    const profissionalRepository = getCustomRepository(ProfissionalRepository)
    
    const list = await profissionalRepository.find({
      order: {
        nome: 'ASC'
      },
      take: 1
    })
    return list
  }
}