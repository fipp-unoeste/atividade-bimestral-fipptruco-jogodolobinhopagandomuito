import EquipeRepository from "../repositories/equipeRepository.js"

export default class EquipeController{
  async listar(req, res){
    try{
      let equipe = new EquipeRepository()
      let lista = await equipe.listar()
      
      res.status(200).json(lista)
    }
    catch(ex){
      res.status(500).json({ msg: ex.message })
    }
  }

  async obter(req, res){
    try{
      let {id} = req.params
      let equipe = new EquipeRepository()
      let result = await equipe.obter(id)

      if(result){ res.status(200).json(result) }
      else{ res.status(404).json({ msg: "Equipe não encontrado!" }) }
    }
    catch(ex){
      res.status(500).json({ msg: ex.message })
    }
  }
}