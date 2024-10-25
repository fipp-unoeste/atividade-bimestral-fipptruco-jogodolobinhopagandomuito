'use client'

import Cabecalho from "@/app/components/Cabecalho";
import CampoEquipe from "@/app/components/CampoEquipe";
import Rodape from "@/app/components/Rodape";
import styled from "styled-components";

const SectionEstilizado = styled.section`
  
`

export default function EscolherEquipe(){

  return(
    <>
      <Cabecalho />

      <main>
        <SectionEstilizado>
          <h2>Escolha sua Equipe</h2>

          <CampoEquipe 
          
          />

          <CampoEquipe 
          
          />
        </SectionEstilizado>
      </main>      

      <Rodape />
    </>
  )
}