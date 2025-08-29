import { Request, Response } from 'express';
// services
import { getNationsService } from '../services/nations/nations-service';

export const getNations = async (req: Request, res: Response) => {
  try {
    // data from services that return a json
    const httpResponse = await getNationsService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
  } catch (error) {
    res.json({ error: 'Error on search' });
  }
}
