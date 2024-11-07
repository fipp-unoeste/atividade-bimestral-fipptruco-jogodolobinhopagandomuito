import styled from "styled-components";
import CampoJogador from "../CampoJogador";
import CampoCartasJogo from "../CampoCartasJogo";
import CampoCartasJogador from "../CampoCartasJogador";

const SectionEstilizado = styled.section`
  background-color: #0d5c1d;
  border: 5px solid #2d1810;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  width: 70%;
  padding: 50px 0;

  .divsEstilizadas {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  #divEquipes {
    color: white;
    font-size: 22px;
  }

  #divValor {
    background-color: #d97706;
    border-radius: 5px;
    padding: 7px 15px;
  }

  #divPrincipal {
    width: 100%;
  }
`;

export interface Card {
  code: string;
  image: string;
  value: string;
  suit: string;
}

async function criarDeck(): Promise<string> {
  const response = await fetch(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  const data = await response.json();
  return data.deck_id;
}

async function comprarCartas(deckId: string, count: number): Promise<Card[]> {
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`
  );
  const data = await response.json();
  return data.cards;
}

export default function CampoJogo() {
  return (
    <SectionEstilizado>
      <div className="divsEstilizadas" id="divEquipes">
        <p>
          Equipe 1: <strong>9</strong>
        </p>

        <div id="divValor">
          <h4>Valor: 3</h4>
        </div>

        <p>
          Equipe 2: <strong>11</strong>
        </p>
      </div>

      <div id="divPrincipal">
        <div className="divsEstilizadas">
          <CampoJogador numeroJogador="J3" nomeJogador="Joao" />
          <CampoJogador numeroJogador="J4" nomeJogador="Maria" />
        </div>

        <div>
          <CampoCartasJogo
            criarDeck={criarDeck}
            comprarCartas={comprarCartas}
          />
        </div>

        <div className="divsEstilizadas">
          <CampoJogador numeroJogador="J1" nomeJogador="Voce" />
          <CampoJogador numeroJogador="J2" nomeJogador="Pedro" />
        </div>
      </div>

      <CampoCartasJogador criarDeck={criarDeck} comprarCartas={comprarCartas} />
    </SectionEstilizado>
  );
}
