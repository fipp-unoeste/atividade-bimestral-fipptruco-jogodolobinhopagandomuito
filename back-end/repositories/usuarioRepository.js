import UsuarioEntity from "../entities/usuarioEntity.js"
import BaseRepository from "./baseRepository.js"

export default class UsuarioRepository extends BaseRepository{
  constructor(db){ super(db) }

  async listar(){
    let sql = "SELECT * FROM tb_usuario"
    let rows = await this.db.ExecutaComando(sql)

    return this.toMap(rows)
  }

  async obter(id){
    let sql = "SELECT * FROM tb_usuario WHERE usu_id = ?"
    let valores = [id]
    let row = await this.db.ExecutaComando(sql, valores)

    return this.toMap(row[0])
  }

  async gravar(entidade){
    let sql = "INSERT INTO tb_usuario (usu_nome, usu_email, usu_senha) VALUES (?, ?, ?)"
    let valores = [entidade.nome, entidade.email, entidade.senha]
    let result = await this.db.ExecutaComandoNonQuery(sql, valores)
    
    return result
  }

  async verificarEmailExistente(email){
    let sql = "SELECT * FROM tb_usuario WHERE usu_email = ?"
    let valores = [email]
    let rows = await this.db.ExecutaComando(sql, valores)

    return rows.length > 0
  }

  async validarAcesso(email, senha){
    let sql = "SELECT * FROM tb_usuario WHERE usu_email = ? AND usu_senha = ?"
    let valores = [email, senha]
    let row = await this.db.ExecutaComando(sql, valores)
    if(!row || row.length === 0){ return null }
    
    return this.toMap(row[0])
  }

  toMap(rows){
    if(rows && typeof rows.length == "number"){
      let lista = []

      for(let i = 0; i < rows.length; i++){
        let row = rows[i]
        let usuario = new UsuarioEntity()

        usuario.id = row["usu_id"]
        usuario.nome = row["usu_nome"]
        usuario.email = row["usu_email"]
        usuario.senha = row["usu_senha"]

        lista.push(usuario)
      }

      return lista
    }
    else if(rows){
      let usuario = new UsuarioEntity()

      usuario.id = rows["usu_id"]
      usuario.nome = rows["usu_nome"]
      usuario.email = rows["usu_email"]
      usuario.senha = rows["usu_senha"]
    
      return usuario
    }
    else{
      return null
    }
  }
}