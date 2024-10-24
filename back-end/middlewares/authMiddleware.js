import jwt from 'jsonwebtoken'
import UsuarioRepository from '../repositories/usuarioRepository.js'

const SEGREDO = "iusbasiun12848vn1klmsda09"

export default class AuthMiddleware{
  gerarToken(id, nome, email){
    return jwt.sign({
      id,
      nome,
      email
    }, SEGREDO, { expiresIn: 400 })
  }

  async validar(req, res, next){
    let {token} = req.cookies

    if(token){
      try{
        let objUsuario = jwt.verify(token, SEGREDO)
        let repo = new UsuarioRepository()
        let usuario = await repo.obter(objUsuario.id)

        if(usuario){
          let auth = new AuthMiddleware()
          let tokenNovo = auth.gerarToken(objUsuario.id, objUsuario.nome, objUsuario.email)

          res.cookie("token", tokenNovo, {
            httpOnly: true
          })
          req.usuarioLogado = usuario

          next()
        }
        else{
          res.status(401).json({ msg: "Não autorizado!" })
        }
      }
      catch(ex){
        res.status(401).json({ msg: "Não autorizado!" })
      }
    }
    else{
      res.status(401).json({ msg: "Não autorizado!" })
    }
  }
}