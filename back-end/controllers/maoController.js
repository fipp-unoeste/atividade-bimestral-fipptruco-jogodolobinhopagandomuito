import MaoRepository from "../repositories/maoRepository.js";
import JogoRepository from "../repositories/jogoRepository.js";
import EquipeRepository from "../repositories/equipeRepository.js";
import MaoEntity from "../entities/maoEntity.js";

export default class MaoController {
  async listar(req, res) {
    try {
      let mao = new MaoRepository();
      let lista = await mao.listar();

      res.status(200).json(lista);
    } catch (ex) {
      res.status(500).json({ msg: ex.message });
    }
  }

  async obter(req, res) {
    try {
      let { id } = req.params;
      let mao = new MaoRepository();
      let result = await mao.obter(id);

      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ msg: "Mão não encontrado!" });
      }
    } catch (ex) {
      res.status(500).json({ msg: ex.message });
    }
  }

  async salvarMao(req, res) {
    try {
      let { ordem, codigoBaralho, trucada, valor, jogoId, equipeVencedora } =
        req.body;

      if (
        ordem &&
        codigoBaralho &&
        trucada &&
        valor &&
        jogoId &&
        jogoId > 0 &&
        equipeVencedora &&
        equipeVencedora > 0
      ) {
        let jogoRepo = new JogoRepository();
        let jogo = await jogoRepo.obter(jogoId);

        if (!jogo) {
          return res.status(404).json({ msg: "Jogo não encontrado!" });
        }

        let equipeRepo = new EquipeRepository();
        let equipe = await equipeRepo.obter(equipeVencedora);

        if (!equipe) {
          return res.status(404).json({ msg: "Equipe não encontrado!" });
        }

        let repo = new MaoRepository();
        let entidade = new MaoEntity(
          0,
          ordem,
          codigoBaralho,
          trucada,
          valor,
          jogoId,
          equipeVencedora
        );
        let result = await repo.salvarMao(entidade);

        if (result) {
          res.status(201).json({ msg: "Mão salva com sucesso!", mao: result });
        } else {
          throw new Error("Erro ao inserir a mão no banco de dados");
        }
      } else {
        res
          .status(400)
          .json({ msg: "Parâmetros não informados corretamente!" });
      }
    } catch (ex) {
      res.status(500).json({ msg: ex.message });
    }
  }
}
