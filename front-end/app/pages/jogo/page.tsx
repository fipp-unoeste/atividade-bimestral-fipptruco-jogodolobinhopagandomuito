"use client";

import PaginaBase from "@/app/pageBase";
import styled from "styled-components";
import CampoJogo from "@/app/components/CampoJogo";

const MainEstilizado = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  background-color: #1a1a1a;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.1) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
`;

export default function Jogo() {
  return (
    <PaginaBase>
      <MainEstilizado>
        <CampoJogo />
      </MainEstilizado>
    </PaginaBase>
  );
}
