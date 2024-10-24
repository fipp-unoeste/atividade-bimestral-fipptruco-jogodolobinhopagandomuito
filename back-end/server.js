import express from 'express'
import swaggerUi from 'swagger-ui-express'
import cookieParser from 'cookie-parser'
import { createRequire } from "module"
const require = createRequire(import.meta.url)
const outputJson = require("./swagger-output.json")
import cors from 'cors'
import routerUsuarios from './routes/usuarioRoute.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson))

app.use("/usuarios", routerUsuarios)

app.listen(5000, function() {
  console.log("Servidor Web em Funcionamento!");
})