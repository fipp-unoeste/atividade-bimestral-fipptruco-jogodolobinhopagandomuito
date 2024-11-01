import styled from "styled-components";
import CampoGuias from "../CampoGuias";
import { SectionEstilizado } from "../JogueOndeQuiser";

const DivEstilizada = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export default function GuiaRapido() {
  return (
    <SectionEstilizado>
      <h3>Guia Rápido</h3>

      <DivEstilizada>
        <CampoGuias
          numero={1}
          titulo="Objetivo"
          texto="Vença rodadas fazendo 12 pontos antes do adversário"
        />

        <CampoGuias
          numero={2}
          titulo="Cartas"
          texto="Cada jogador recebe 3 cartas por rodada"
        />

        <CampoGuias
          numero={3}
          titulo="Pontuação"
          texto="Ganhe 1, 3, 6, 9 ou 12 pontos por rodada"
        />

        <CampoGuias
          numero={4}
          titulo="Trucar"
          texto="Aumente a aposta durante a rodada"
        />
      </DivEstilizada>
    </SectionEstilizado>
  );
}
