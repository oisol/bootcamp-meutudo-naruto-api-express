// repositories
import {
  getNinjasRepository,
  createNinjasRepository,
  updateNinjasRepository,
  deleteNinjasRepository
} from "../../repositories/ninjas-repository";
// templates
import { NinjaInput } from "../../types/Ninja";
//utils
import {
  ok,
  noContent,
  badRequest,
  created
} from "../../utils/http-helper";
import { validateNinjaInput, validateNinjaStats } from "../../utils/validate-ninja-input";

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
    response = await noContent();
  }

  return response;
};

export const createNinjasService = async (input: NinjaInput) => {
  let response = null;

  if (validateNinjaInput(input) && Object.keys(input).length === 9) {
    if (validateNinjaStats(input)) {
      const data = await createNinjasRepository(input);
      response = await created(data);
    } else {
      response = await badRequest("Invalid stats values. stat must be between 0 and 100")
    }
  } else {
    response = await badRequest("Invalid input.");
  };

  return response;
}

export async function updateNinjasService(id: number, input: NinjaInput) {
  return await updateNinjasRepository(id, input);
}

export async function deleteNinjasByIdService(id: number) {
  return await deleteNinjasRepository(id);
}
