import { Router, response } from "express";

import { metodos as main} from "../controllers/main.controller";

const router = Router();
router.get("/", main.index);
router.get("/estado", main.estado);

export default router;
