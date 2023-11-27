// ENDPOINTS DEL SERVIDOR
import { Router } from "express";
import {login,logout,profile,register} from "../controllers/auth.controller.js"
import { authRequired } from "../middlewares/validateToken.js";
import {handleErrorValidations,validateLogin,validateRegister} from "../middlewares/validateAuth.js"



const routes = Router()
// Ruta para el Resgitro del usuario
routes.post("/register",validateRegister,handleErrorValidations,register);
// Ruta para el login
routes.post("/login",validateLogin,handleErrorValidations,login);
// salir
routes.post("/logout",logout);
// profile
routes.get("/profile",authRequired ,profile);
export default routes;