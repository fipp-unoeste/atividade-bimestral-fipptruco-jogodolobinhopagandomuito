'use client'

import Cabecalho from "@/app/components/Cabecalho";
import Formulario from "@/app/components/Formulario";
import Rodape from "@/app/components/Rodape";
import { MainEstilizado } from "../cadastrar/page";
import { useAutenticacaoContext } from "@/app/contexts/useContext";
import { useEffect } from "react";

export default function CriarPagina(){
  const inputs = [{ tipo: "text", obrigatorio: true, placeholder: "Digite o nome da sala...", nomeInput: "nomeSala", nomeLabel: "Nome da Sala" }]
  const { acessarPagina } = useAutenticacaoContext()

  useEffect(() => { acessarPagina() }, [acessarPagina])

  return(
    <>
      <Cabecalho />

      <MainEstilizado>
        <Formulario 
          titulo="Criar Nova Sala"
          inputs={inputs}
          linkUrl=""
          linkTexto={{ pergunta: "", resposta: "Voltar para a área do jogador" }}
          textoSubmit="Criar Sala"
          texto="Digite um nome para sua sala de truco"
        />
      </MainEstilizado>

      <Rodape />
    </>
  )
}