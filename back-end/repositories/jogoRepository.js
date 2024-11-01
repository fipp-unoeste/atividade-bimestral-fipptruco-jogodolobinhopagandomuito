import JogoEntity from "../entities/jogoEntity.js";
import BaseRepository from "./baseRepository.js";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default class JogoRepository extends BaseRepository {
  constructor(db) {
    super(db);
  }

  async listar() {
    let sql = "SELECT * FROM tb_jogo";
    let rows = await this.db.ExecutaComando(sql);

    return this.toMap(rows);
  }

  async obter(id) {
    let sql = "SELECT * FROM tb_jogo WHERE jog_id = ?";
    let valores = [id];
    let row = await this.db.ExecutaComando(sql, valores);

    return this.toMap(row[0]);
  }

  async gravar(entidade) {
    let sql =
      "INSERT INTO tb_jogo (jog_dtinicio, jog_dtfim, sal_id) VALUES (?, ?, ?)";
    let valores = [entidade.dtInicio, entidade.dtFim, entidade.salaId];
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
        let jogo = new JogoEntity();

        jogo.id = row["jog_id"];

        jogo.dtInicio = row["jog_dtinicio"]
          ? format(new Date(row["jog_dtinicio"]), "dd/MM/yyyy HH:mm:ss", {
              locale: ptBR,
            })
          : null;
        jogo.dtFim = row["jog_dtfim"]
          ? format(new Date(row["jog_dtfim"]), "dd/MM/yyyy HH:mm:ss", {
              locale: ptBR,
            })
          : null;

        jogo.salaId = row["sal_id"];

        lista.push(jogo);
      }

      return lista;
    } else if (rows) {
      let jogo = new JogoEntity();

      jogo.id = rows["jog_id"];

      jogo.dtInicio = rows["jog_dtinicio"]
        ? format(new Date(rows["jog_dtinicio"]), "dd/MM/yyyy HH:mm:ss", {
            locale: ptBR,
          })
        : null;
      jogo.dtFim = rows["jog_dtfim"]
        ? format(new Date(rows["jog_dtfim"]), "dd/MM/yyyy HH:mm:ss", {
            locale: ptBR,
          })
        : null;

      jogo.salaId = rows["sal_id"];

      return jogo;
    } else {
      return null;
    }
  }
}
