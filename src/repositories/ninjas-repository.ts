// repositories/ninjasRepository.ts
import { pool } from '../configs/db';
import { NinjaInput } from '../models/Ninja.js';

// Get All
export async function getNinjasRepository() {
  const query = `
    SELECT 
      n.id,
      n.name,
      n.village,
      n.occupation,
      na.name AS nation,
      n.ninjutsu,
      n.taijutsu,
      n.genjutsu,
      n.speed,
      n.stamina
    FROM ninjas n
    JOIN nations na ON n.nation_id = na.id
    ORDER BY n.id;
  `;

  const { rows } = await pool.query(query);
  return rows;
};


