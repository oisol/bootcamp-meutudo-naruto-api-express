//import pkg from 'pg';
//const { Pool } = pkg;
import { Pool } from 'pg';

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT!)
});

// test connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Conection error in PostgreSQL:', err);
  } else {
    console.log('Connection with PostgreSQL successful:', res.rows[0]);
  }
});
