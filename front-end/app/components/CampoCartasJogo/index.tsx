import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../CampoJogo";

const DivEstilizada = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 150px;
    height: 200px;
    margin: 10px;
  }

  p {
    color: white;
    font-size: 22px;
  }
`;

interface CampoCartasJogoProps {
  criarDeck: () => Promise<string>;
  comprarCartas: (deckId: string, count: number) => Promise<Card[]>;
}

export default function CampoCartasJogo({
  criarDeck,
  comprarCartas,
}: CampoCartasJogoProps): JSX.Element {
  const [deckId, setDeckId] = useState<string | null>(null);
  const [vira, setVira] = useState<Card | null>(null);
  const [carregando, setCarregando] = useState<boolean>(true);

  useEffect(() => {
    const sortearVira = async () => {
      try {
        const novoDeckId = await criarDeck();
        setDeckId(novoDeckId);

        const [cartaVira] = await comprarCartas(novoDeckId, 1);
        setVira(cartaVira);

        setCarregando(false);
      } catch (error) {
        console.error("Erro ao sortear a vira: ", error);
      }
    };

    sortearVira();
  }, [criarDeck, comprarCartas]);

  return (
    <DivEstilizada>
      {carregando ? (
        <p>Carregando a vira...</p>
      ) : (
        <>
          {vira && (
            <div>
              <p>Vira</p>
              <img src={vira.image} alt={`${vira.value} de ${vira.suit}`} />
            </div>
          )}
        </>
      )}
    </DivEstilizada>
  );
}
