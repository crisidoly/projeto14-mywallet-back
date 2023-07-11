import { Router } from "express";
import authRouter from "./auth.routes.js"
import transacaoRouter from "./transacao.routes.js"

const router = Router()
router.use(authRouter);
router.use(transacaoRouter)

export default router