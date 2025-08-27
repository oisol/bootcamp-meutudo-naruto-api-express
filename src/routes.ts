import { Router } from 'express';
// Controllers
import {
  getNinjas,
  getNinjaById,
  createNinjas,
  updateNinjas,
  deleteNinjas
} from "./controllers/ninjas-controller";

// routes manager 
const router = Router();

// Ninjas
router.get("/ninjas", getNinjas);
router.get("/ninjas/:id", getNinjaById);
router.post("/ninjas", createNinjas);
router.put("/ninjas/:id", updateNinjas);
router.delete("/ninjas/:id", deleteNinjas);

export default router;
