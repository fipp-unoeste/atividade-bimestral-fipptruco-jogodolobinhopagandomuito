'use client'

import Cabecalho from "@/app/components/Cabecalho";
import CamposSalaPesquisa from "@/app/components/CampoSalasPesquisa";
import Rodape from "@/app/components/Rodape";
import SalasDisponiveis from "@/app/components/SalasDisponiveis";
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
    <>
      <Cabecalho />

      <MainEstilizado>
        <CamposSalaPesquisa />

        <SalasDisponiveis />
      </MainEstilizado>
    
      <Rodape />
    </>
  )
}