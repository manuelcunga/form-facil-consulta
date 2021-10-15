import { getCustomRepository } from "typeorm";
import { IcreateProfissionalDTO } from "../controllers/profissional/dto/IProfissionalDTO";
import { Profissional } from "../entities/profissional";
import { ProfissionalRepository } from "../repositories/profissionalRepository";

export class updateProfissional{
  
  public async Execute({
    nome,cpf,celular,estado,cidade
  }:IcreateProfissionalDTO): Promise<Profissional>{
    const profissionalRepository = getCustomRepository(ProfissionalRepository)
    
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