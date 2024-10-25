import SalaEntity from '../entities/salaEntity.js'
import UsuarioEntity from '../entities/usuarioEntity.js'
import BaseRepository from './baseRepository.js'

export default class SalaRepository extends BaseRepository{
  constructor(db){ super(db) }

  async listar(){
    let sql = "SELECT * FROM tb_sala"
    let rows = await this.db.ExecutaComando(sql)

    return this.toMap(rows)
  }

  async obter(id){
    let sql = "SELECT * FROM tb_sala WHERE sal_id = ?"
    let valores = [id]
    let row = await this.db.ExecutaComando(sql, valores)

    return this.toMap(row[0])
  }

  async gravar(entidade){
    let sql = "INSERT INTO tb_sala (sal_nome, usu_id) VALUES (?, ?)"
    let valores = [entidade.nome, entidade.usuarioId]
    let insertId = await this.db.ExecutaComandoLastInserted(sql, valores)

    if(insertId){ return await this.obter(insertId) } 
    else{ return null }
  }
 
  toMap(rows){
    if(rows && typeof rows.length == "number"){
      let lista = []

      for(let i = 0; i < rows.length; i++){
        let row = rows[i]
        let sala = new SalaEntity()

        sala.id = row["sal_id"]
        sala.nome = row["sal_nome"]
        sala.usuarioId = row["usu_id"]

        lista.push(sala)
      }

      return lista
    }
    else if(rows){
      let sala = new SalaEntity()

      sala.id = rows["sal_id"]
      sala.nome = rows["sal_nome"]
      sala.usuarioId = rows["usu_id"]
    
      return sala
    }
    else{
      return null
    }
  }
}