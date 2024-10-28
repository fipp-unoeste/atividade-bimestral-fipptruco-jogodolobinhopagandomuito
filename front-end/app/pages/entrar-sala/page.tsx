'use client'

import CamposSalaPesquisa from "@/app/components/CampoSalasPesquisa";
import SalasDisponiveis from "@/app/components/SalasDisponiveis";
import PaginaBase from "@/app/pageBase";
import styled from "styled-components";

const MainEstilizado = styled.main`
  background-color: #F0F1F3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  gap: 100px;
`

export default function EntrarSala(){
  return(
    <PaginaBase>

      <MainEstilizado>
        <CamposSalaPesquisa />

        <SalasDisponiveis />
      </MainEstilizado>
    
    </PaginaBase>
  )
}