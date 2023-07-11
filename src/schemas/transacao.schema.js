import joi from "joi";

export const transacaoSchema = joi.object({
  value: joi.number().positive().required(),
  description: joi.string().required(),
  type: joi.string().required().valid("entrada", "saida")
})