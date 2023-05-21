import { Router, response } from "express";

import { metodos as userController } from "../controllers/user.controller";
import {validaciones}from "./../validators/user.validator"

const router = Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.post("/", validaciones,userController.insertUsers);
router.put("/:id",validaciones, userController.updateUsers);
router.delete("/:id", userController.deleteUsers);
router.get("/promedio/edad/", userController.promedio);

export default router;
