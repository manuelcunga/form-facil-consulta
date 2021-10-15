const { HOST, USER_NAME, DB_NAME, PASSWORD, PORT } = process.env

module.exports = {
    type: 'postgres',
    host: HOST,
    port: PORT,
    username: USER_NAME,
    password: PASSWORD,
    database: DB_NAME,
    entities: [
        "./src/entities/*.ts"
    ],
    migrations: [
        "./src/database/migrations/*.ts"
    ],
    cli: {
        "migrationsDir": "./src/database/migrations/"
    }
}