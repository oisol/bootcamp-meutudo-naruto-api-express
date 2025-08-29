import { getNationsRepository } from '../../repositories/nations-repository';
// utils
import { ok, noContent } from '../../utils/http-helper';

export const getNationsService = async () => {
  let response = null;
  const data = await getNationsRepository();
  const dataRows = data.map(n => ({
    id: n.id,
    name: n.name,
  }));

  if (dataRows.length > 0) {
    response = ok(dataRows);
  } else {
    response = noContent();
  };

  return response;
}
