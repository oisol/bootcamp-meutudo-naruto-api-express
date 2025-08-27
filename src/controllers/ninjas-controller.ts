import { Request, Response } from "express";
// services
import {
  getNinjasService,
  getNinjaByIdService,
  createNinjasService,
  updateNinjasService,
  deleteNinjasByIdService
} from "../services/ninjas/ninjas-service";
// interfaces
import { NinjaInput } from "../types/Ninja";
// utils
import { created } from "../utils/http-helper";

export const getNinjas = async (req: Request, res: Response) => {
  try {
    // data from services that return a json
    const httpResponse = await getNinjasService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
  } catch (error) {
    res.json({ error: 'Error on search' });
  }
};

export const getNinjaById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const httpResponse = await getNinjaByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  } catch (error) {
    res.json({ error: 'Error on search ninja by Id' });
  }
};

export const createNinjas = async (req: Request, res: Response) => {
  try {
    // pick the input in the body of the request using the interface
    const input: NinjaInput = req.body;
    // send the input to the service
    const httpResponse = await createNinjasService(input);

    if (httpResponse) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    }
  } catch (error) {
    res.json({ error: 'Error on create Ninja. ' + error });
  }
}

export async function updateNinjas(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const input: NinjaInput = req.body;
    const ninja = await updateNinjasService(Number(id), input);

    if (!ninja) {
      return res.status(404).json({ error: 'Ninja not found' });
    }
    res.json(ninja);
  } catch (error) {
    res.status(500).json({ error: 'Error on update Ninja' });
  }
}

export async function deleteNinjas(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const ninja = await deleteNinjasByIdService(Number(id));
    if (!ninja) {
      return res.status(404).json({ error: 'Ninja não encontrado' });
    }
    res.json({ message: 'Ninja deleted', ninja });
  } catch (error) {
    res.status(500).json({ error: 'Error on deleting Ninja' });
  }
}
