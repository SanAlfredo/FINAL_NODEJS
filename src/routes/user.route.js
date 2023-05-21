import { Router, response } from "express";

import { metodos as userController } from "../controllers/user.controller";

const router = Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.post("/", userController.insertUsers);
router.put("/:id", userController.updateUsers);
router.delete("/:id", userController.deleteUsers);
router.get("/promedio/edad/", userController.promedio);

export default router;
