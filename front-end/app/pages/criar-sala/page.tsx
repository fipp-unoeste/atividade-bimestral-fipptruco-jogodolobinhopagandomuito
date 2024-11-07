"use client";

import Formulario from "@/app/components/Formulario";
import { MainEstilizado } from "../cadastrar/page";
import { useAutenticacaoContext } from "@/app/contexts/useContext";
import { useEffect } from "react";
import PaginaBase from "@/app/pageBase";

export default function CriarPagina() {
  const inputs = [
    {
      tipo: "text",
      obrigatorio: true,
      placeholder: "Digite o nome da sala...",
      nomeInput: "nomeSala",
      nomeLabel: "Nome da Sala",
    },
  ];
  const { acessarPagina } = useAutenticacaoContext();

  useEffect(() => {
    acessarPagina();
  }, [acessarPagina]);

  return (
    <PaginaBase>
      <MainEstilizado>
        <Formulario
          titulo="Criar Nova Sala"
          inputs={inputs}
          linkUrl="area-do-jogador"
          linkTexto={{
            pergunta: "",
            resposta: "Voltar para a área do jogador",
          }}
          textoSubmit="Criar Sala"
          texto="Digite um nome para sua sala de truco"
        />
      </MainEstilizado>
    </PaginaBase>
  );
}
