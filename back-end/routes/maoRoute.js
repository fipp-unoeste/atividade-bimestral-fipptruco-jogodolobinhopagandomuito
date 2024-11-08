import express from "express";
import MaoController from "../controllers/maoController.js";

const router = express.Router();

let ctrl = new MaoController();

router.get("/", (req, res) => {
  // #swagger.tags = ['Mão']
  // #swagger.summary = 'Endpoint para retornar todas as mão'

  ctrl.listar(req, res);
});

router.get("/:id", (req, res) => {
  //#swagger.tags = ['Mão']
  //#swagger.summary = 'Retorna uma mão baseado em um código'

  ctrl.obter(req, res);
});

router.post("/", (req, res) => {
  //#swagger.tags = ['Mão']
  //#swagger.summary = 'Salva uma mão'
  /*  #swagger.requestBody = {
          required: true,
          content: {
              "application/json": {
                  schema: {
                      $ref: "#/components/schemas/maoModel"
                  }  
              }
          }
      } 
  */

  ctrl.salvarMao(req, res);
});

export default router;
