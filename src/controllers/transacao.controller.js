import dayjs from "dayjs"
import { db } from "../database/database.connection.js"

export async function criarTransacao(req, res) {
  const { value, description, type} = req.body
  const { userId } = res.locals.session

  try {
    const transacao = { value: Number(value), description, type, userId, date: dayjs().format("DD/MM") }
    await db.collection("transactions").insertOne(transacao)
    res.sendStatus(201)

  } catch (err) {
    res.status(500).send(err.message)

  }

}

export async function pegarTransacoes(req, res) {
  const { userId } = res.locals.session
  try {
    const transacoes = await db.collection("transactions").find({ userId }).sort ({ date: -1 }).toArray()

    res.send(transacoes)
  } catch (err) {
    res.status(500).send(err.message)

  }
}