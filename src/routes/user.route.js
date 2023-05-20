import { Router, response } from "express";

import { metodos as userController } from "../controllers/user.controller";

const router = Router();

router.get("/",userController.getUsers);
// router.get("/", (request, response) => {
//   response.send("hola alfredito");
// });

export default router;
