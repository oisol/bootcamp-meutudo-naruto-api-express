// repositories
import { getNinjasRepository } from "../../repositories/ninjas-repository";
//utils
import { ok, noContent } from "../../utils/http-helper";

export const getNinjasService = async () => {
  const data = await getNinjasRepository();
  let response = null;

  if (data) {
    // status code helper like a middleware
    response = await ok(data);
  } else {
    response = await noContent(data);
  }

  return response;
};
