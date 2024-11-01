import JogoEntity from "../entities/jogoEntity.js";
import JogoRepository from "../repositories/jogoRepository.js";
import SalaRepository from "../repositories/salaRepository.js";
import { isValid } from "date-fns";

export default class JogoController {
  async listar(req, res) {
    try {
      let jogo = new JogoRepository();
      let lista = await jogo.listar();

      res.status(200).json(lista);
    } catch (ex) {
      res.status(500).json({ msg: ex.message });
    }
  }

  async obter(req, res) {
    try {
      let { id } = req.params;
      let jogo = new JogoRepository();
      let result = await jogo.obter(id);

      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ msg: "Jogo não encontrado!" });
      }
    } catch (ex) {
      res.status(500).json({ msg: ex.message });
    }
  }

  async gravar(req, res) {
    try {
      let { dtInicio, dtFim, salaId } = req.body;

      if (dtInicio && salaId && salaId > 0) {
        let salaRepo = new SalaRepository();
        let sala = await salaRepo.obter(salaId);

        if (!sala) {
          return res.status(404).json({ msg: "Sala não encontrada!" });
        }

        let dataInicio = new Date(dtInicio);
        let dataFim = dtFim ? new Date(dtFim) : null;

        if (!isValid(dataInicio)) {
          return res.status(400).json({ msg: "Data de início inválida!" });
        }

        if (dtFim && !isValid(dataFim)) {
          return res.status(400).json({ msg: "Data de fim inválida!" });
        }

        let repo = new JogoRepository();
        let entidade = new JogoEntity(0, dataInicio, dataFim, salaId);
        let result = await repo.gravar(entidade);

        if (result) {
          res
            .status(201)
            .json({ msg: "Jogo gravado com sucesso!", jogo: result });
        } else {
          throw new Error("Erro ao inserir o jogo no banco de dados");
        }
      } else {
        res
          .status(400)
          .json({ msg: "Parâmetros não informados corretamente!" });
      }
    } catch (ex) {
      console.error("Erro ao gravar jogo:", ex);
      res.status(500).json({ msg: ex.message });
    }
  }
}
