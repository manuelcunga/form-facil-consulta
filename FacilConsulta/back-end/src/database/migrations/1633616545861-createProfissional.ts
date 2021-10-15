import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createProfissional1633616545861 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'profissional',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'nome',
                        type: 'varchar',

                    },
                    {
                        name: 'cpf',
                        type: 'varchar',
                        isUnique: true,
                        
                    },
                    {
                        name: 'celular',
                        type: 'varchar',

                    },
                     {
                        name: 'estado',
                        type: 'varchar',

                    }, {
                        name: 'cidade',
                        type: 'varchar',

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
        await queryRunner.dropTable('profissional')
    }

}
