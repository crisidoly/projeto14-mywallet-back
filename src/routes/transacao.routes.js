import { Router } from "express";
import { criarTransacao, pegarTransacoes } from "../controllers/transacao.controller.js";
import { validarAuth } from "../middlewares/validarAuth.middleware.js";
import { validarSchema } from "../middlewares/validarSchema.middleware.js";
import { transacaoSchema } from "../schemas/transacao.schema.js";

const transacaoRouter = Router();

transacaoRouter.use(validarAuth)

transacaoRouter.post("/transactions", validarSchema(transacaoSchema), criarTransacao)
transacaoRouter.get("/transactions", pegarTransacoes)

export default transacaoRouter