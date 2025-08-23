import { Router } from 'express';
// Controllers
import { getNinjas } from "./controllers/ninjas-controller";

// routes manager 
const router = Router();

// Ninjas
router.get("/ninjas", getNinjas);

export default router;
