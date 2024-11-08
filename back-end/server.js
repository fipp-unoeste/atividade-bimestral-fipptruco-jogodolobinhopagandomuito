import express from "express";
import swaggerUi from "swagger-ui-express";
import cookieParser from "cookie-parser";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const outputJson = require("./swagger-output.json");
import cors from "cors";
import routerAutenticacao from "./routes/autenticacaoRoute.js";
import routerUsuarios from "./routes/usuarioRoute.js";
import routerSala from "./routes/salaRoute.js";
import routerEquipe from "./routes/equipeRoute.js";
import routerJogo from "./routes/jogoRoute.js";
import routerParticipante from "./routes/participanteRoute.js";
import routerMao from "./routes/maoRoute.js";
import { WebSocketServer } from "ws";

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson));

app.use("/auth", routerAutenticacao);
app.use("/usuarios", routerUsuarios);
app.use("/salas", routerSala);
app.use("/equipes", routerEquipe);
app.use("/jogos", routerJogo);
app.use("/participantes", routerParticipante);
app.use("/maos", routerMao);

const wss = new WebSocketServer({ noServer: true });

wss.on("connection", (ws) => {
  console.log("Novo usuário conectado!");

  ws.on("message", (message) => {
    console.log("Mensagem recebida:", message);

    ws.send("Mensagem recebida no servidor!");
  });

  ws.on("close", () => {
    console.log("Usuário desconectado!");
  });
});

app.server = app.listen(port, function () {
  console.log("Servidor Web em Funcionamento!");
});

app.server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit("connection", ws, request);
  });
});
