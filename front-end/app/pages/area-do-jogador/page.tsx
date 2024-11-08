"use client";

import OpcoesJogador from "@/app/components/OpcoesJogador";
import { useAutenticacaoContext } from "@/app/contexts/useContext";
import PaginaBase from "@/app/pageBase";
import { useEffect } from "react";
import styled from "styled-components";

const MainEstilizado = styled.main`
  height: 100vh;
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  gap: 50px;
  padding: 50px;

  h2 {
    font-size: 35px;
  }

  @media (max-width: 1406px) {
    height: 100%;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 28px;
    }
  }
`;

const SectionEstilizado = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 180px;

  @media (max-width: 1024px) {
    gap: 80px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export default function AreaDoJogador() {
  const { acessarPagina } = useAutenticacaoContext();

  useEffect(() => {
    acessarPagina();
  }, [acessarPagina]);

  return (
    <PaginaBase>
      <MainEstilizado>
        <h2>Área do Jogador</h2>

        <SectionEstilizado>
          <OpcoesJogador
            titulo="Criar Nova Sala"
            texto="Crie sua própria sala de jogo e convide amigos para jogar"
            textoBotao="Criar Sala"
            svg="M12 4v16m8-8H4"
            linkBotao="criar-sala"
            svgBotao="M17 8l4 4m0 0l-4 4m4-4H3"
          />

          <OpcoesJogador
            titulo="Entrar em Sala"
            texto="Entre em uma sala ja existente"
            textoBotao="Buscar Salas"
            svg="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            linkBotao="entrar-sala"
            svgBotao="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />

          <OpcoesJogador
            titulo="Minha Conta"
            texto="Gerencie seu perfil, veja estatísticas e histórico"
            textoBotao="Ver Perfil"
            svg="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            linkBotao="minha-conta"
            svgBotao="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </SectionEstilizado>
      </MainEstilizado>
    </PaginaBase>
  );
}
