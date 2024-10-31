import styled from "styled-components";

const DivEstilizada = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #fff;
  border-radius: 14px;
  width: 20%; 
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
      text-align: center; 
    }

    p {
      font-size: 15px;
      font-weight: 100;
      text-align: center;
    }
  }

  @media (max-width: 1024px) {
    width: 30%; 
    padding: 20px 0; 
  }

  @media (max-width: 768px) {
    width: 45%;
    padding: 15px 0; 
  }

  @media (max-width: 480px) {
    width: 85%; 
    padding: 10px 0; 
    gap: 15px; 
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
