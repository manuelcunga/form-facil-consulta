import {
  Column,
  CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn
} from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('profissional')
export class Profissional{
  @PrimaryColumn()
  id: string

  @Column()
  nome: string
  
  @Column()
  cpf: string
  
  @Column()
  celular: number

  @Column()
  estado: string 
  
  @Column()
  cidade: string

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