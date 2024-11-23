import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../CampoJogo";

const DivEstilizada = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  p {
    font-size: 20px;
    color: white;
  }

  img {
    width: 200px;
    height: 270px;
  }
`;

interface CampoCartasJogadorProps {
  criarDeck: () => Promise<string>;
  comprarCartas(
    deckId: string,
    count: number,
    excluir: string[]
  ): Promise<Card[]>;
  cartaVira: Card | null;
}

export default function CampoCartasJogador({
  criarDeck,
  comprarCartas,
  cartaVira,
}: CampoCartasJogadorProps): JSX.Element {
  const [cartas, setCartas] = useState<Card[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);

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

  useEffect(() => {
    const cartasDoJogador = async () => {
      try {
        const deckId = await criarDeck();
        let cartasDoJogador = await comprarCartas(deckId, 3, excluirCartas);

        if (cartaVira) {
          const excluirCartasVira = [cartaVira.code];
          cartasDoJogador = await comprarCartas(deckId, 3, [
            ...excluirCartas,
            ...excluirCartasVira,
          ]);
        }

        setCartas(cartasDoJogador);
        setCarregando(false);
      } catch (error) {
        console.error("Erro ao buscar as cartas: ", error);
      }
    };

    cartasDoJogador();
  }, [criarDeck, comprarCartas, cartaVira]);

  return (
    <DivEstilizada>
      {carregando ? (
        <p>Carregando suas cartas...</p>
      ) : (
        <>
          {cartas.map((carta) => (
            <div key={carta.code} className="carta">
              <img src={carta.image} alt={`${carta.value} of ${carta.suit}`} />
            </div>
          ))}
        </>
      )}
    </DivEstilizada>
  );
}
