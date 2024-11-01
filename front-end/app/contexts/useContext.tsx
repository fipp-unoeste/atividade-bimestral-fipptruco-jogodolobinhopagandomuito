import { useContext } from "react";
import Contexts from "./Context";

export const useDadosUsuarioContext = () => {
  return useContext(Contexts.DadosUsuarioContext);
};

export const useAutenticacaoContext = () => {
  return useContext(Contexts.AutenticacaoContext);
};

export const useDadosSalaContext = () => {
  return useContext(Contexts.DadosSalaContext);
};

export const useDadosEquipeContext = () => {
  return useContext(Contexts.DadosEquipeContext);
};

export const useDadosJogoContext = () => {
  return useContext(Contexts.DadosJogoContext);
};

const useContexts = {
  useDadosUsuarioContext,
  useAutenticacaoContext,
  useDadosSalaContext,
  useDadosEquipeContext,
  useDadosJogoContext,
};

export default useContexts;
