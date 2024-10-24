import UsuarioEntity from "../entities/usuarioEntity.js"
import UsuarioRepository from "../repositories/usuarioRepository.js"

export default class UsuarioController{
  async listar(req, res){
    try{
      let usuario = new UsuarioRepository()
      let lista = await usuario.listar()
      
      res.status(200).json(lista)
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

  async entrar(req, res){
    try{
      const {email, senha} = req.body

      if(!email || !senha){ return res.status(400).json({ msg: "E-mail e senha são obrigatórios." }) }

      let repo = new UsuarioRepository()
      const usuario = await repo.validarAcesso(email, senha)
      
      if(usuario){ res.status(200).json({ msg: "Login realizado com sucesso!", usuario }) } 
      else{ res.status(401).json({ msg: "E-mail ou senha incorretos." }) }
    }
    catch(ex){
      res.status(500).json({ msg: ex.message })
    }
  }
}