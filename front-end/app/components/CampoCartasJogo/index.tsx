import { Card } from "../CampoJogo";
import styled from "styled-components";

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
  cartaVira: Card | null; 
}

export default function CampoCartasJogo({
  cartaVira, 
}: CampoCartasJogoProps): JSX.Element {
  return (
    <DivEstilizada>
      {cartaVira ? ( 
        <div>
          <p>Vira</p>
          <img
            src={cartaVira.image}
            alt={`${cartaVira.value} de ${cartaVira.suit}`}
          />
        </div>
      ) : (
        <p>Carregando a vira...</p>
      )}
    </DivEstilizada>
  );
}
