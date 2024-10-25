import { useContext } from "react"
import Contexts from "./Context"

export const useDadosUsuarioContext = () => {
  return useContext(Contexts.DadosUsuarioContext)
}

export const useAutenticacaoContext = () => {
  return useContext(Contexts.AutenticacaoContext)
}

export const useDadosSalaContext = () => {
  return useContext(Contexts.DadosSalaContext)
}

export const useDadosEquipeContext = () => {
  return useContext(Contexts.DadosEquipeContext)
}

const useContexts = {
  useDadosUsuarioContext,
  useAutenticacaoContext,
  useDadosSalaContext,
  useDadosEquipeContext
}

export default useContexts