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
  comprarCartas: (deckId: string, count: number) => Promise<Card[]>;
}

export default function CampoCartasJogador({
  criarDeck,
  comprarCartas,
}: CampoCartasJogadorProps): JSX.Element {
  const [cartas, setCartas] = useState<Card[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);

  useEffect(() => {
    const cartasDoJogador = async () => {
      try {
        const deckId = await criarDeck();
        const comprarCarta = await comprarCartas(deckId, 3);
        setCartas(comprarCarta);
        setCarregando(false);
      } catch (error) {
        console.error("Erro ao buscar as cartas: ", error);
      }
    };

    cartasDoJogador();
  }, [criarDeck, comprarCartas]);

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
