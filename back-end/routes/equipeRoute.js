import express from 'express'
import EquipeController from '../controllers/equipeController.js'

const router = express.Router()

let ctrl = new EquipeController()

router.get("/", (req, res) => {
  // #swagger.tags = ['Equipe']
  // #swagger.summary = 'Endpoint para retornar todas as equipe'

    ctrl.listar(req, res)
})

router.get("/:id", (req, res) => {
  //#swagger.tags = ['Equipe']
  //#swagger.summary = 'Retorna uma equipe baseado em um código'

  ctrl.obter(req, res)
})

export default router