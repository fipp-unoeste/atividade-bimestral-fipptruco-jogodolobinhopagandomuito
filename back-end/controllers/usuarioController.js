import UsuarioEntity from "../entities/usuarioEntity.js"
import UsuarioRepository from "../repositories/usuarioRepository.js"

export default class UsuarioController{
  async listar(req, res){
    try{
      let usuario = new UsuarioRepository()
      let todosUsuarios = await usuario.listar()

      res.status(200).json({todosUsuarios, usuarioLogado: req.usuarioLogado})
    }
    catch(ex){
      res.status(500).json({ msg: ex.message })
    }
  }

  async obter(req, res){
    try{
      let {id} = req.params
      let usuario = new UsuarioRepository()
      let result = await usuario.obter(id)

      if(result){ res.status(200).json(result) }
      else{ res.status(404).json({ msg: "Usuário não encontrado!" }) }
    }
    catch(ex){
      res.status(500).json({ msg: ex.message })
    }
  }

  async gravar(req, res){
    try{
      let {nome, email, senha} = req.body

      if(nome && email && senha){
        let repo = new UsuarioRepository()
        let emailExistente = await repo.verificarEmailExistente(email)
        
        if(emailExistente){
          res.status(400).json({ msg: "Email já cadastrado!" })
          return
        }

        let entidade = new UsuarioEntity(0, nome, email, senha)
        let result = await repo.gravar(entidade)

        if(result){ res.status(201).json({ msg: "Usuário gravado com sucesso!" }) }
        else{ throw new Error("Erro ao inserir o usuário no banco de dados") }
      }
      else{
        res.status(400).json({ msg: "Parâmetros não informados corretamente!" })
      }
    }
    catch(ex){
      console.error('Erro ao gravar usuário:', ex); 
      res.status(500).json({ msg: ex.message })
    }
  }

  async alterar(req, res){
    try{
      let {id, nome, email, senha} = req.body

      if(id && nome && email && senha){
        let entidade = new UsuarioEntity(id, nome, email, senha)
        let repo = new UsuarioRepository()

        if(await repo.obter(id)){
          let usuarioAtualizado = await repo.alterar(entidade)

          if(usuarioAtualizado){ res.status(200).json({ msg: "Alteração realizada com sucesso!", usuario: usuarioAtualizado }) }
          else{ throw new Error("Erro ao executar o comando update!") }
        }
        else{
          res.status(404).json({ msg: "Usuário não encontrado para alteração" })
        }
      }
      else{
        res.status(400).json({ msg: "Informe os parâmetros corretamente!" })
      }
    }
    catch(ex){
      res.status(500).json({ msg: ex.message })
    }
  }

  async alteracaoParcial(req, res){
    try{
      let {id, nome, email, senha} = req.body

      if(id && (nome || email || senha)){
        let entidade = new UsuarioEntity(id, nome, email, senha)

        let repo = new UsuarioRepository()
        let usuarioAtualizado = await repo.alteracaoParcial(entidade)

        if(usuarioAtualizado){ res.status(200).json({ msg: "Alteração parcial realizada com sucesso!", usuario: usuarioAtualizado }) }
        else{ throw new Error("Erro ao executar a atualização no banco de dados") }
      }
      else{
        res.status(400).json({ msg: "Informe os parâmetros corretamente!" })
      }
    }
    catch(ex){
      res.status(500).json({ msg: ex.message })
    }
  }
}