import styled from "styled-components";

const DivEstilizada = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  gap: 15px;
  width: 14%;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.22);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  #divNumero {
    padding: 15px 20px;
    background-color: #d1fae5;
    border-radius: 100%;

    p {
      font-size: 25px;
      font-weight: 700;
      color: #059669;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 6px;

    h4 {
      font-size: 18px;
      text-align: center;
    }
  }

  @media (max-width: 1024px) {
    width: 20%;
  }

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 80%;
    padding: 15px;
  }
`;

interface CampoGuiasProps {
  numero: number;
  titulo: string;
  texto: string;
}

export default function CampoGuias({
  numero,
  titulo,
  texto,
}: CampoGuiasProps): JSX.Element {
  return (
    <DivEstilizada>
      <div id="divNumero">
        <p>{numero}</p>
      </div>

      <div>
        <h4>{titulo}</h4>

        <p>{texto}</p>
      </div>
    </DivEstilizada>
  );
}
