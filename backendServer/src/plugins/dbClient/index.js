import Knex from 'knex';
import 'dotenv/config';

const knex = Knex({
    client:"postgres",
    connection: {
        host: 'localhost',
        port: "5432",
        user: 'postgres',
        password: '1234a',
        database: 'test',
        charset: 'utf8'
    },
    debug:true,
    pool: {
        min:0,
        max:10
    },
    acquireConnectionTimeout : 100000
});

export default knex;