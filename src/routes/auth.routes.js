import { Router } from "express";
import { loginSchema, userSchema } from "../schemas/auth.schema.js"
import { validarSchema } from "../middlewares/validarSchema.middleware.js";
import { login, logout, register } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/cadastro", validarSchema(userSchema), register)
authRouter.post("/login", validarSchema(loginSchema), login)
authRouter.post("/logout", logout)

export default authRouter