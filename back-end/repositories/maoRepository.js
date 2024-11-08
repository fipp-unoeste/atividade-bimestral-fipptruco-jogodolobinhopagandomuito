import MaoEntity from "../entities/maoEntity.js";
import BaseRepository from "./baseRepository.js";

export default class MaoRepository extends BaseRepository {
  constructor(db) {
    super(db);
  }

  async listar() {
    let sql = "SELECT * FROM tb_mao";
    let rows = await this.db.ExecutaComando(sql);

    return this.toMap(rows);
  }

  async obter(id) {
    let sql = "SELECT * FROM tb_mao WHERE mao_id = ?";
    let valores = [id];
    let row = await this.db.ExecutaComando(sql, valores);

    return this.toMap(row[0]);
  }

  async salvarMao(entidade) {
    let sql = `INSERT INTO tb_mao (mao_ordem, mao_codigobaralho, mao_trucada, mao_valor, jog_id, eqp_vencedora) VALUES (?, ?, ?, ?, ?, ?)`;
    let valores = [
      entidade.ordem,
      entidade.codigoBaralho,
      entidade.trucada,
      entidade.valor,
      entidade.jogoId,
      entidade.equipeVencedora,
    ];
    console.log("Valores para salvar:", valores);
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
        let mao = new MaoEntity();

        mao.id = row["mao_id"];
        mao.ordem = row["mao_ordem"];
        mao.codigoBaralho = row["mao_codigobaralho"];
        mao.trucada = row["mao_trucada"];
        mao.valor = row["mao_valor"];
        mao.jogoId = row["jog_id"];
        mao.equipeVencedora = row["eqp_vencedora"];

        lista.push(mao);
      }

      return lista;
    } else if (rows) {
      let mao = new MaoEntity();

      mao.id = rows["mao_id"];
      mao.ordem = rows["mao_ordem"];
      mao.codigoBaralho = rows["mao_codigobaralho"];
      mao.trucada = rows["mao_trucada"];
      mao.valor = rows["mao_valor"];
      mao.jogoId = rows["jog_id"];
      mao.equipeVencedora = rows["eqp_vencedora"];

      return mao;
    } else {
      return null;
    }
  }
}
