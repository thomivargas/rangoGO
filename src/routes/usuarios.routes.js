import { Router } from "express";
import * as gameController from "../controllers/game.controller.js";
import * as userController from "../controllers/user.controller.js";

const router = Router();


// CREAR USUARIO
router.post("/", userController.create);
// OBTENER TODOS
router.get("/", userController.index);
// OBTENER UN USUARIO
router.get("/:id", userController.show);
// ELIMINAR USUARIO
router.get("/:id", userController.destroy);
// Vincular cuenta de Clash of Clans
router.get('/:id/clashofclans', gameController.saveCuentaClashOfClans);


export default router;