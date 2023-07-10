import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import router from "./routes/index.routes.js";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(router);



const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}!`))