import { Router } from 'express';
// Controllers
import {
  getNinjas,
  getNinjaById,
  createNinjas,
  updateNinjas,
  deleteNinjas
} from "./controllers/ninjas-controller";
import {
  getNations
} from "./controllers/nations-controller";

// routes manager 
const router = Router();

// Ninjas
router.get("/ninjas", getNinjas);
router.get("/ninjas/:id", getNinjaById);
router.post("/ninjas", createNinjas);
router.put("/ninjas/:id", updateNinjas);
router.delete("/ninjas/:id", deleteNinjas);
// Nations 
router.get("/nations", getNations);
export default router;
