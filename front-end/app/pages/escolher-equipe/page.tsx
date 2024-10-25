'use client'

import Cabecalho from "@/app/components/Cabecalho";
import CampoEquipe from "@/app/components/CampoEquipe";
import Rodape from "@/app/components/Rodape";
import { useDadosEquipeContext } from "@/app/contexts/useContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

const MainEstilizado = styled.main`
  background-color: #14532D;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
`

const SectionEstilizado = styled.section`
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  padding: 50px 0;
  width: 60%;
  border-radius: 20px;

  h2{
    font-size: 38px;
  }

  button{
    border-radius: 10px;
    padding: 15px 55px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    background-color: #059669;
    color: white;
    transition: background-color 0.3s ease;
  }

  button:disabled{
    background-color: #D1D5DB;
    cursor: not-allowed;
  }

  button:hover{
    background-color: #059668ae;
  }
`

export default function EscolherEquipe(){
  const [selectedEquipe, setSelectedEquipe] = useState<string | null>(null)
  const { todasEquipes, equipes, setEquipe } = useDadosEquipeContext()
  const router = useRouter();

  useEffect(() => { todasEquipes() }, [])

  const isClick = () => {
    if(selectedEquipe){
      const equipeSelecionada = equipes?.find((equipe: any) => equipe.descricao === selectedEquipe);

      if(equipeSelecionada){
        setEquipe(equipeSelecionada)
        router.push("")
      }
    }
  }

  return(
    <>
      <Cabecalho />

      <MainEstilizado>
        <SectionEstilizado>
          <h2>Escolha sua Equipe</h2>

          {equipes && equipes.length > 0 ? (
            equipes.map((equipe: any, index: number) => (
              <CampoEquipe
                key={index}
                nomeEquipe={equipe.descricao}
                nomeJogador1={equipe.descricao === "Equipe 1" ? "Jogador 1" : "Jogador 3"}
                nomeJogador2={equipe.descricao === "Equipe 1" ? "Jogador 2" : "Jogador 4"}
                isSelected={selectedEquipe === equipe.descricao}
                onClick={() => setSelectedEquipe(equipe.descricao)}
              />
            ))
          ) : (
            <p>Carregando equipes...</p>
          )}

          <button onClick={isClick} disabled={!selectedEquipe}>
            Pronto
          </button>
        </SectionEstilizado>
      </MainEstilizado>      

      <Rodape />
    </>
  )
}