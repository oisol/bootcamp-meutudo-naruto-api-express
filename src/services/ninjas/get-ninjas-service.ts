// repositories
import {
  getNinjasRepository,
  createNinjasRepository,
  updateNinjasRepository,
  deleteNinjasRepository
} from "../../repositories/ninjas-repository";
// templates
import { NinjaInput } from "../../models/Ninja";
//utils
import {
  ok,
  noContent,
  badRequest,
  created
} from "../../utils/http-helper";

export const getNinjasService = async () => {
  const data = await getNinjasRepository();
  const dataRows = data.map(n => ({
    id: n.id,
    name: n.name,
    nation: n.nation,
    village: n.village,
    occupation: n.occupation,
    statistics: {
      ninjutsu: n.ninjutsu,
      taijutsu: n.taijutsu,
      genjutsu: n.genjutsu,
      speed: n.speed,
      stamina: n.stamina
    }
  }));
  let response = null;

  if (dataRows) {
    // status code helper like a middleware
    response = await ok(dataRows);
  } else {
    response = await badRequest(dataRows);
  }

  return response;
};

export const createNinjasService = async (input: NinjaInput) => {
  // add validation to min and max values latter
  const data = await createNinjasRepository(input);
  let response = null;

  if (data) {
    response = await created(data);
  } else {
    response = await badRequest(data);
  }

  return response;
}

export async function updateNinjasService(id: number, input: NinjaInput) {
  return await updateNinjasRepository(id, input);
}

export async function deleteNinjasByIdService(id: number) {
  return await deleteNinjasRepository(id);
}
