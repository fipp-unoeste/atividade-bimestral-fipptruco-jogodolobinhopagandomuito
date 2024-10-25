import SalaEntity from "../entities/salaEntity.js"
import SalaRepository from "../repositories/salaRepositories.js"
import UsuarioRepository from "../repositories/usuarioRepository.js"

export default class SalaController{
  async listar(req, res){
    try{
      let sala = new SalaRepository()
      let lista = await sala.listar()
      
      res.status(200).json(lista)
    }
    catch(ex){
      res.status(500).json({ msg: ex.message })
    }
  }

  async obter(req, res){
    try{
      let {id} = req.params
      let sala = new SalaRepository()
      let result = await sala.obter(id)

      if(result){ res.status(200).json(result) }
      else{ res.status(404).json({ msg: "Sala não encontrado!" }) }
    }
    catch(ex){
      res.status(500).json({ msg: ex.message })
    }
  }

  async gravar(req, res){
    try{
      let {nome, usuarioId} = req.body

      if(nome && usuarioId && usuarioId > 0){
        let usuarioRepo = new UsuarioRepository()
        let usuario = await usuarioRepo.obter(usuarioId)

        if(!usuario){ return res.status(404).json({ msg: "Usuário não encontrado!" }) }

        let repo = new SalaRepository()
        let entidade = new SalaEntity(0, nome, usuarioId)
        let result = await repo.gravar(entidade)

        if(result){ res.status(201).json({ msg: "Sala gravado com sucesso!" }) }
        else{ throw new Error("Erro ao inserir o usuário no banco de dados") }
      }
      else{
        res.status(400).json({ msg: "Parâmetros não informados corretamente!" })
      }
    }
    catch(ex){
      console.error('Erro ao gravar sala:', ex); 
      res.status(500).json({ msg: ex.message })
    }
  }
}