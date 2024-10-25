import { createContext } from "react"

export interface DadosUsuario{
  id?: number
  nome?: string
  email?: string
  senha?: string
}

interface DadosUsuarioType{
  usuario: DadosUsuario | null
  setUsuario: (usuario: DadosUsuario | null) => void
  autenticarUsuario: (dados: DadosUsuario, tipo: "Cadastrar" | "Entrar") => Promise<void>
  mensagemErro: string | null
  setMensagemErro: (mensagemErro: string | null) => void
}

interface AutenticacaoContextType{
  isAutenticado: boolean
  setIsAutenticado: (valor: boolean) => void
  acessarPagina: () => void
}

export interface DadosSala{
  id?: number
  nome?: string
  usuarioId?: number
}

interface DadosSalaType{
  sala: DadosSala | null
  setSala: (sala: DadosSala | null) => void
  cadastroSala: (dados: DadosSala) => Promise<void>
}

const DadosUsuarioContext = createContext<DadosUsuarioType>({
  usuario: null,
  setUsuario: () => {},
  autenticarUsuario: async () => {},
  mensagemErro: null,
  setMensagemErro: () => {}
})

const AutenticacaoContext = createContext<AutenticacaoContextType>({
  isAutenticado: false,
  setIsAutenticado: () => {},
  acessarPagina: () => {}
})

const DadosSalaContext = createContext<DadosSalaType>({
  sala: null,
  setSala: () => {},
  cadastroSala: async () => {}
})

DadosUsuarioContext.displayName = "DadosUsuario"
AutenticacaoContext.displayName = "Autenticacao"
DadosSalaContext.displayName = "DadosSala"

const Contexts = {
  DadosUsuarioContext,
  AutenticacaoContext,
  DadosSalaContext
};

export default Contexts