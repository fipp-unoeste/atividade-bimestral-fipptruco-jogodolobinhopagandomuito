import express from 'express'
import UsuarioController from '../controllers/usuarioController.js'

const router = express.Router()

let ctrl = new UsuarioController()

router.get("/", (req, res) => {
  // #swagger.tags = ['Usuário']
    // #swagger.summary = 'Endpoint para retornar todos os usuários'

    ctrl.listar(req, res)
})

router.get("/:id", (req, res) => {
  //#swagger.tags = ['Usuário']
  //#swagger.summary = 'Retorna um usuário baseado em um código'

  ctrl.obter(req, res)
})

router.post("/", (req, res) => {
  //#swagger.tags = ['Usuário']
  //#swagger.summary = 'Cadastra um usuário'
  /*  #swagger.requestBody = {
          required: true,
            content: {
              "application/json": {
                  schema: {
                      $ref: "#/components/schemas/usuarioModel"
                  }  
              }
          }
      } 
  */

  ctrl.gravar(req, res)
})

export default router