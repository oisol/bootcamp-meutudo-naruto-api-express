import { Request, Response } from "express";
// services
import { getNinjasService } from "../services/ninjas/get-ninjas-service";
// utils
import { ok } from "../utils/http-helper";

export const getNinjas = async (req: Request, res: Response) => {
  // data from services is used to send a .json
  const data = await getNinjasService();

  // status code helper like a middleware
  const response = await ok(data);

  res.status(response.statusCode).json(response.body);
};
