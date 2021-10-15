import { getCustomRepository } from "typeorm";
import { IcreateProfissionalDTO } from "../controllers/profissional/dto/IProfissionalDTO";
import { Profissional } from "../entities/profissional";
import { ProfissionalRepository } from "../repositories/profissionalRepository";

export class ProfissionalService{
  
  public async Execute({
    nome,cpf,celular,estado,cidade
  }:IcreateProfissionalDTO): Promise<Profissional>{
    const profissionalRepository = getCustomRepository(ProfissionalRepository)
    const AlreadyProfissional   = await profissionalRepository.findOne({cpf})
    
    if(AlreadyProfissional){
       throw new Error("Ups, Profissional já existe!");
      
    }
    const profissional =  profissionalRepository.create({
      nome,
      cpf,
      celular,
      estado,
      cidade
    })

    await profissionalRepository.save(profissional)
    return profissional
  }
}