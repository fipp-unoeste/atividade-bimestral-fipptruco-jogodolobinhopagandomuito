import { useState, useEffect } from "react";
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

// Função atualizada para bloquear a compra das cartas 8, 9 e 10
async function comprarCartas(
  deckId: string,
  count: number,
  excluir: string[] = []
): Promise<Card[]> {
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`
  );
  const data = await response.json();

  let cartas = data.cards.filter(
    (carta: Card) => !excluir.includes(carta.code)
  );

  // Continua comprando cartas até que o número desejado seja atingido
  while (cartas.length < count) {
    const adicional = await comprarCartas(
      deckId,
      count - cartas.length,
      excluir
    );
    cartas = [...cartas, ...adicional];
  }

  return cartas;
}

export default function CampoJogo() {
  const [vira, setVira] = useState<Card | null>(null);
  const [deckId, setDeckId] = useState<string | null>(null);

  useEffect(() => {
    const sortearVira = async () => {
      try {
        const novoDeckId = await criarDeck();
        setDeckId(novoDeckId);

        const excluirCartas = [
          "8C",
          "8D",
          "8H",
          "8S", 
          "9C",
          "9D",
          "9H",
          "9S", 
          "10C",
          "10D",
          "10H",
          "10S", 
        ];

        const [cartaVira] = await comprarCartas(novoDeckId, 1, excluirCartas);
        setVira(cartaVira);
      } catch (error) {
        console.error("Erro ao sortear a vira: ", error);
      }
    };

    sortearVira();
  }, []);

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
          <CampoCartasJogo cartaVira={vira} />
        </div>

        <div className="divsEstilizadas">
          <CampoJogador numeroJogador="J1" nomeJogador="Voce" />
          <CampoJogador numeroJogador="J2" nomeJogador="Pedro" />
        </div>
      </div>

      <CampoCartasJogador
        criarDeck={criarDeck}
        comprarCartas={comprarCartas}
        cartaVira={vira}
      />
    </SectionEstilizado>
  );
}
