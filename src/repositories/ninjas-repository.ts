// repositories/ninjasRepository.ts
import { pool } from '../configs/db';
import { NinjaInput, Ninja } from '../types/Ninja.js';

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

  const { rows } = await pool.query<Ninja>(query);
  return rows;
};

export async function getNinjaByIdRepository(id: number) {
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
    WHERE n.id = $1;
  `;

  const { rows } = await pool.query<Ninja>(query, [id]);
  return rows;
};

// Create
export async function createNinjasRepository(input: NinjaInput) {
  const query = `
    INSERT INTO ninjas (name, village, occupation, nation_id, ninjutsu, taijutsu, genjutsu, speed, stamina)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
    RETURNING *;
  `;

  const values = [
    input.name,
    input.village,
    input.occupation,
    input.nation_id,
    input.ninjutsu,
    input.taijutsu,
    input.genjutsu,
    input.speed,
    input.stamina,
  ];

  const { rows } = await pool.query(query, values);
  return rows[0];
};


// Update
export async function updateNinjasRepository(id: number, input: NinjaInput) {
  const query = `
    UPDATE ninjas
    SET name=$1, village=$2, occupation=$3, nation_id=$4, 
        ninjutsu=$5, taijutsu=$6, genjutsu=$7, speed=$8, stamina=$9
    WHERE id=$10
    RETURNING *;
  `;
  const values = [
    input.name,
    input.village,
    input.occupation,
    input.nation_id,
    input.ninjutsu,
    input.taijutsu,
    input.genjutsu,
    input.speed,
    input.stamina,
    id
  ];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

// Delete // try with post next
export async function deleteNinjasRepository(id: number) {
  const query = `DELETE FROM ninjas WHERE id=$1 RETURNING *;`;
  const { rows } = await pool.query(query, [id]);
  return rows[0];
}
