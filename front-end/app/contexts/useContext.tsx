import { useContext } from "react"
import Contexts from "./Context"

export const useDadosUsuarioContext = () => {
  return useContext(Contexts.DadosUsuarioContext)
}

export const useAutenticacaoContext = () => {
  return useContext(Contexts.AutenticacaoContext)
}

const useContexts = {
  useDadosUsuarioContext,
  useAutenticacaoContext
}

export default useContexts