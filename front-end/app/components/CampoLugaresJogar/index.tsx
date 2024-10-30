import styled from "styled-components";

const DivEstilizada = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #fff;
  border-radius: 14px;
  width: 14%;
  padding: 30px 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.35);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  svg {
    width: 80px;
    height: 80px;
    color: #059669;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    h5 {
      font-size: 19px;
    }

    p {
      font-size: 15px;
      font-weight: 100;
    }
  }
`;

interface CampoLugaresJogarProps {
  svg: string;
  titulo: string;
  texto: string;
}

export default function CampoLugaresJogar({
  svg,
  titulo,
  texto,
}: CampoLugaresJogarProps): JSX.Element {
  return (
    <DivEstilizada>
      <div>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={svg}
          />
        </svg>
      </div>

      <div>
        <h5>{titulo}</h5>

        <p>{texto}</p>
      </div>
    </DivEstilizada>
  );
}
