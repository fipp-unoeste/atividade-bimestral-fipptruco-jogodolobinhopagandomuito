import { createContext } from "react"

export interface DadosUsuario{
  id?: number;
  nome?: string;
  email?: string;
  senha?: string;
}

interface DadosUsuarioType{
  usuario: DadosUsuario | null
  setUsuario: (usuario: DadosUsuario | null) => void
  autenticarUsuario: (dados: DadosUsuario, tipo: "Cadastrar" | "Entrar") => Promise<void>
  mensagemErro: string | null,
  setMensagemErro: (mensagemErro: string | null) => void
}

interface AutenticacaoContextType {
  isAutenticado: boolean
  setIsAutenticado: (valor: boolean) => void
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
})

DadosUsuarioContext.displayName = "DadosUsuario"
AutenticacaoContext.displayName = "Autenticacao"

const Contexts = {
  DadosUsuarioContext,
  AutenticacaoContext
};

export default Contexts