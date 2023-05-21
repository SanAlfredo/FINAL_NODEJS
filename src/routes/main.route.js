import { Router, response } from "express";

import { main } from "../controllers/main.controller";

const router = Router();
router.get("/", main);

export default router;
