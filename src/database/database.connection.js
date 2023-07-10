import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.DATABASE_URL);

export default async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Conectado a database");
    const db = client.db();
    return db;
  } catch (error) {
    console.log(error);
    throw new Error("Falha ao conectar na database");
  }
}


