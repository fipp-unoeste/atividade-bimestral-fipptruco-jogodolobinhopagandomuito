import ParticipanteEntity from "../entities/participanteEntity.js";
import BaseRepository from "./baseRepository.js";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default class ParticipanteRepository extends BaseRepository {
  constructor(db) {
    super(db);
  }

  async listar() {
    let sql = "SELECT * FROM tb_participante";
    let rows = await this.db.ExecutaComando(sql);

    return this.toMap(rows);
  }

  async obter(id) {
    let sql = "SELECT * FROM tb_participante WHERE par_id = ?";
    let valores = [id];
    let row = await this.db.ExecutaComando(sql, valores);

    return this.toMap(row[0]);
  }

  async gravar(entidade) {
    let sql =
      "INSERT INTO tb_participante (par_dtentrada, par_dtsaida, usu_id, sal_id, eqp_id) VALUES (?, ?, ?, ?, ?)";
    let valores = [
      entidade.dtEntrada,
      entidade.dtSaida,
      entidade.usuarioId,
      entidade.salaId,
      entidade.equipeId,
    ];
    let insertId = await this.db.ExecutaComandoLastInserted(sql, valores);

    if (insertId) {
      return await this.obter(insertId);
    } else {
      return null;
    }
  }

  toMap(rows) {
    if (rows && typeof rows.length == "number") {
      let lista = [];

      for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let participante = new ParticipanteEntity();

        participante.id = row["par_id"];

        participante.dtEntrada = row["par_dtentrada"]
          ? format(new Date(row["par_dtentrada"]), "dd/MM/yyyy HH:mm:ss", {
              locale: ptBR,
            })
          : null;
        participante.dtSaida = row["par_dtsaida"]
          ? format(new Date(row["par_dtsaida"]), "dd/MM/yyyy HH:mm:ss", {
              locale: ptBR,
            })
          : null;

        participante.usuarioId = row["usu_id"];
        participante.salaId = row["sal_id"];
        participante.equipeId = row["eqp_id"];

        lista.push(participante);
      }

      return lista;
    } else if (rows) {
      let participante = new ParticipanteEntity();

      participante.id = rows["par_id"];

      participante.dtEntrada = rows["par_dtentrada"]
        ? format(new Date(rows["par_dtentrada"]), "dd/MM/yyyy HH:mm:ss", {
            locale: ptBR,
          })
        : null;
      participante.dtSaida = rows["par_dtsaida"]
        ? format(new Date(rows["par_dtsaida"]), "dd/MM/yyyy HH:mm:ss", {
            locale: ptBR,
          })
        : null;

      participante.usuarioId = rows["usu_id"];
      participante.salaId = rows["sal_id"];
      participante.equipeId = rows["eqp_id"];

      return participante;
    } else {
      return null;
    }
  }
}
