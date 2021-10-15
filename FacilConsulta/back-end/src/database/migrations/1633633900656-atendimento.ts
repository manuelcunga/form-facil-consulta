import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class atendimento1633633900656 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'atendimentos',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                    },
                    {
                        name: 'especialidade',
                        type: 'varchar'
                    },
                    {
                        name: 'preco',
                        type: 'varchar'
                    },
                    {
                        name: 'formas_consulta',
                        type: 'varchar'
                    },
                    
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                      },
                      {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                      }  
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('atendimentos')
    }

}
