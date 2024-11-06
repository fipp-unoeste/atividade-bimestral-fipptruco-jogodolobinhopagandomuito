import JogoEntity from "../entities/jogoEntity.js";
import JogoRepository from "../repositories/jogoRepository.js";
import SalaRepository from "../repositories/salaRepository.js";
import { isValid, parse } from "date-fns";

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
        let dataFim = dtFim;

        if (!isValid(dataInicio)) {
          return res.status(400).json({ msg: "Data de início inválida!" });
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

  async fimDeJogo(req, res) {
    try {
      let { id, dtFim } = req.body;

      if (id && dtFim) {
        let dataFim = parse(dtFim, "dd/MM/yyyy, HH:mm:ss", new Date());

        if (!isValid(dataFim)) {
          return res.status(400).json({ msg: "Data de fim inválida!" });
        }

        let jogoRepo = new JogoRepository();
        let entidade = new JogoEntity(id, null, dataFim, null);
        let jogoAtualizado = await jogoRepo.fimDeJogo(entidade);

        if (jogoAtualizado) {
          res.status(200).json({
            msg: "Fim de jogo realizado com sucesso!",
            jogo: jogoAtualizado,
          });
        } else {
          res.status(404).json({ msg: "Jogo não encontrado!" });
        }
      } else {
        res.status(400).json({ msg: "Informe os parâmetros corretamente!" });
      }
    } catch (ex) {
      res.status(500).json({ msg: ex.message });
    }
  }
}
