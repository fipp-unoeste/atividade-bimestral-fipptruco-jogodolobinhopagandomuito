import ParticipanteRepository from "../repositories/participanteRepository.js";
import UsuarioRepository from "../repositories/usuarioRepository.js";
import SalaRepository from "../repositories/salaRepository.js";
import EquipeRepository from "../repositories/equipeRepository.js";
import { isValid } from "date-fns";
import ParticipanteEntity from "../entities/participanteEntity.js";

export default class ParticipanteController {
  async listar(req, res) {
    try {
      let participante = new ParticipanteRepository();
      let lista = await participante.listar();

      res.status(200).json(lista);
    } catch (ex) {
      res.status(500).json({ msg: ex.message });
    }
  }

  async obter(req, res) {
    try {
      let { id } = req.params;
      let participante = new ParticipanteRepository();
      let result = await participante.obter(id);

      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ msg: "Participante não encontrado!" });
      }
    } catch (ex) {
      res.status(500).json({ msg: ex.message });
    }
  }

  async gravar(req, res) {
    try {
      let { dtEntrada, dtSaida, usuarioId, salaId, equipeId } = req.body;

      if (
        dtEntrada &&
        usuarioId &&
        usuarioId > 0 &&
        salaId &&
        salaId > 0 &&
        equipeId &&
        equipeId > 0
      ) {
        let usuarioRepo = new UsuarioRepository();
        let usuario = await usuarioRepo.obter(usuarioId);

        if (!usuario) {
          return res.status(404).json({ msg: "Usuario não encontrado!" });
        }

        let salaRepo = new SalaRepository();
        let sala = await salaRepo.obter(salaId);

        if (!sala) {
          return res.status(404).json({ msg: "Sala não encontrada!" });
        }

        let equipeRepo = new EquipeRepository();
        let equipe = await equipeRepo.obter(equipeId);

        if (!equipe) {
          return res.status(404).json({ msg: "Equipe não encontrada!" });
        }

        let dataEntrada = new Date(dtEntrada);
        let dataSaida = dtSaida ? new Date(dtSaida) : null;

        if (!isValid(dataEntrada)) {
          return res.status(400).json({ msg: "Data de entrada inválida!" });
        }
        
        if (dataSaida && !isValid(dataSaida)) {
          return res.status(400).json({ msg: "Data de saida inválida!" });
        }

        let repo = new ParticipanteRepository();
        let entidade = new ParticipanteEntity(0, dataEntrada, dataSaida, usuarioId, salaId, equipeId);
        let result = await repo.gravar(entidade);

        if (result) {
          res
            .status(201)
            .json({ msg: "Participante gravado com sucesso!", participante: result });
        } else {
          throw new Error("Erro ao inserir o participante no banco de dados");
        }
      } else {
        res
          .status(400)
          .json({ msg: "Parâmetros não informados corretamente!" });
      }
    } catch (ex) {
      console.error("Erro ao gravar participante:", ex);
      res.status(500).json({ msg: ex.message });
    }
  }
}
