import express from "express";
import SalaController from "../controllers/salaController.js";

const router = express.Router();

let ctrl = new SalaController();

router.get("/", (req, res) => {
  // #swagger.tags = ['Sala']
  // #swagger.summary = 'Endpoint para retornar todos os sala'

  ctrl.listar(req, res);
});

router.get("/:id", (req, res) => {
  //#swagger.tags = ['Sala']
  //#swagger.summary = 'Retorna um sala baseado em um código'

  ctrl.obter(req, res);
});

router.post("/", (req, res) => {
  //#swagger.tags = ['Sala']
  //#swagger.summary = 'Cadastra um sala'
  /*  #swagger.requestBody = {
          required: true,
            content: {
              "application/json": {
                  schema: {
                      $ref: "#/components/schemas/salaModel"
                  }  
              }
          }
      } 
  */

  ctrl.gravar(req, res);
});

export default router;
