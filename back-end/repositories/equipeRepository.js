import EquipeEntity from "../entities/equipeEntity.js"
import BaseRepository from "./baseRepository.js"

export default class EquipeRepository extends BaseRepository{
  constructor(db){ super(db) }

  async listar(){
    let sql = "SELECT * FROM tb_equipe"
    let rows = await this.db.ExecutaComando(sql)

    return this.toMap(rows)
  }

  async obter(id){
    let sql = "SELECT * FROM tb_equipe WHERE eqp_id = ?"
    let valores = [id]
    let row = await this.db.ExecutaComando(sql, valores)

    return this.toMap(row[0])
  }
 
  toMap(rows){
    if(rows && typeof rows.length == "number"){
      let lista = []

      for(let i = 0; i < rows.length; i++){
        let row = rows[i]
        let equipe = new EquipeEntity()

        equipe.id = row["eqp_id"]
        equipe.descricao = row["eqp_descricao"]

        lista.push(equipe)
      }

      return lista
    }
    else if(rows){
      let equipe = new EquipeEntity()

      equipe.id = rows["eqp_id"]
      equipe.descricao = rows["eqp_descricao"]
    
      return equipe
    }
    else{
      return null
    }
  }
}