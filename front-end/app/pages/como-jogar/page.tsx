"use client";

import CampoInicial from "@/app/components/CampoInicial";
import GuiaRapido from "@/app/components/GuiaRapido";
import RegrasDoJogo from "@/app/components/RegrasDoJogo";
import ValorCartas from "@/app/components/ValorCartas";
import PaginaBase from "@/app/pageBase";
import styled from "styled-components";

const MainEstilizado = styled.main``;

export default function ComoJogar() {
  return (
    <PaginaBase>
      <MainEstilizado>
        <CampoInicial
          titulo="Como Jogar Truco"
          subTitulo="Aprenda todas as regras e estratégias do jogo"
        />

        <GuiaRapido />

        <ValorCartas />

        <RegrasDoJogo />
      </MainEstilizado>
    </PaginaBase>
  );
}
