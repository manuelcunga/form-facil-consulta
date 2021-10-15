import { getCustomRepository } from "typeorm";
import { ICreateAtendimentoDTO } from "../controllers/atendimentos/dto/ICreateAtendimentoDTO";
import { Atendimentos } from "../entities/atendimentos";
import { AtendimentoRepository } from "../repositories/atendimentoRepository";

export class AtendimentoService{
  
  public async Execute({
    especialidade,preco,formas_consulta
  }:ICreateAtendimentoDTO): Promise<Atendimentos>{
    
    const atendimentoRepository = getCustomRepository(AtendimentoRepository)
    
    
    const atendimentos =  atendimentoRepository.create({
     especialidade,
     preco,
     formas_consulta
    })

    await atendimentoRepository.save(atendimentos)
    return atendimentos
  }
}