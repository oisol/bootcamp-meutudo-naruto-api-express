import { Request, Response } from "express";
// services
import { getNinjasService } from "../services/ninjas/get-ninjas-service";

export const getNinjas = async (req: Request, res: Response) => {
  // data from services that return a json
  const httpResponse = await getNinjasService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};
