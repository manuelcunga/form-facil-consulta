import {
  Column,
  CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn
} from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('atendimentos')
export class Atendimentos{
  @PrimaryColumn()
  
  id: string

  @Column()
  especialidade: string
  
  @Column()
  preco: string

  @Column()
  formas_consulta: string 


  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
}