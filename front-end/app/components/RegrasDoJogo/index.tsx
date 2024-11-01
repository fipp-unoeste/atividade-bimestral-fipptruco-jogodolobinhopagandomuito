import styled from "styled-components";
import CampoMotivosFIPPTruco from "../CampoMotivosFIPPTruco";
import { SectionEstilizado } from "../JogueOndeQuiser";

const DivEstilizada = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
  gap: 60px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
    width: 100%;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export default function RegrasDoJogo() {
  return (
    <SectionEstilizado>
      <h3>Regras do Jogo</h3>

      <DivEstilizada id="teste">
        <CampoMotivosFIPPTruco
          titulo="Início da Partida"
          texto1="Cada jogador recebe 3 cartas"
          texto2="A primeira rodada vale 1 ponto"
          texto3="Vence quem ganhar 2 de 3 rodadas"
        />

        <CampoMotivosFIPPTruco
          titulo="Pontuação"
          texto1="Rodada normal: 1 ponto"
          texto2="Truco aceito: 3 pontos"
          texto3="Seis: 6 pontos"
          texto4="Nove: 9 pontos"
          texto5="Doze: 12 pontos"
        />

        <CampoMotivosFIPPTruco
          titulo="Trucada"
          texto1="Pode-se trucar para aumentar pontos"
          texto2="Trucada vale 3 pontos"
          texto3="Pode-se aumentar para 6, 9 ou 12"
        />

        <CampoMotivosFIPPTruco
          titulo="Vitória"
          texto1="Primeiro a fazer 12 pontos vence"
          texto2="Em caso de empate, ninguém pontua"
          texto3="Pode-se jogar melhor de 3 partidas"
        />
      </DivEstilizada>
    </SectionEstilizado>
  );
}
