import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;

const pool = new Pool({
    user : 'testid',
    password : '1234a',
    database : 'test',
    host : 'db',
    port : '5432',
    max:5
});

export default pool;