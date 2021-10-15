import { EntityRepository, Repository } from "typeorm"
import { Profissional } from "../entities/profissional"

@EntityRepository(Profissional)
export class ProfissionalRepository extends Repository<Profissional> {}