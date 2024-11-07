import express from "express";
import UsuarioController from "../controllers/usuarioController.js";
import AuthMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

let ctrl = new UsuarioController();
let auth = new AuthMiddleware();

router.get("/", auth.validar, (req, res) => {
  // #swagger.tags = ['Usuário']
  // #swagger.summary = 'Endpoint para retornar todos os usuários'
  /* #swagger.security = [{
          "bearerAuth": []
     }] 
  */

  ctrl.listar(req, res);
});

router.get("/:id", auth.validar, (req, res) => {
  //#swagger.tags = ['Usuário']
  //#swagger.summary = 'Retorna um usuário baseado em um código'
  /* #swagger.security = [{
          "bearerAuth": []
     }] 
  */

  ctrl.obter(req, res);
});

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

  ctrl.gravar(req, res);
});

router.put("/", (req, res) => {
  //#swagger.tags = ['Usuário']
  //#swagger.summary = 'Altera um usuário'
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

  ctrl.alterar(req, res);
});

router.patch("/", (req, res) => {
  //#swagger.tags = ['Usuário']
  //#swagger.summary = 'Realiza a alteração parcial do usuário'
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

  ctrl.alteracaoParcial(req, res);
});

export default router;
