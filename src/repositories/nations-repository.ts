import { pool } from '../configs/db';
import { Nation } from '../types/Nation';

// Get All
export const getNationsRepository = async () => {
  const query = `
    SELECT 
      n.id,
      n.name
    FROM nations n
    ORDER BY n.id;
  `;

  const { rows } = await pool.query<Nation>(query);
  return rows;
};
