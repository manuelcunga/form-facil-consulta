import { EntityRepository, Repository } from "typeorm"
import { Atendimentos } from "../entities/atendimentos"

@EntityRepository(Atendimentos)
export class AtendimentoRepository extends Repository<Atendimentos> {}