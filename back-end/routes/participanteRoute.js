import express from "express";
import ParticipanteController from "../controllers/participanteController.js";

const router = express.Router();

let ctrl = new ParticipanteController();

router.get("/", (req, res) => {
  // #swagger.tags = ['Participante']
  // #swagger.summary = 'Endpoint para retornar todos os participantes'

  ctrl.listar(req, res);
});

router.get("/:id", (req, res) => {
  //#swagger.tags = ['Participante']
  //#swagger.summary = 'Retorna um participante baseado em um código'

  ctrl.obter(req, res);
});

router.post("/", (req, res) => {
  //#swagger.tags = ['Participante']
  //#swagger.summary = 'Cadastra um participante'
  /*  #swagger.requestBody = {
          required: true,
            content: {
              "application/json": {
                  schema: {
                      $ref: "#/components/schemas/participanteModel"
                  }  
              }
          }
      } 
  */

  ctrl.gravar(req, res);
});

router.patch("/", (req, res) => {
  //#swagger.tags = ['Participante']
  //#swagger.summary = 'Realiza a saida do jogo'
  /*  #swagger.requestBody = {
          required: true,
          content: {
              "application/json": {
                  schema: {
                      $ref: "#/components/schemas/participanteModel"
                  }  
              }
          }
      } 
  */

  ctrl.saidaDoJogo(req, res);
});

export default router;
