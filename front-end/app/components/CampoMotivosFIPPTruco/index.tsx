import styled from "styled-components";

const DivEstilizada = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  background-color: #fff;
  border-radius: 14px;
  width: 25%;
  padding: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.35);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 85%;
    padding: 20px;
    gap: 20px;
  }

  #divSvg {
    background-color: #d1fae5;
    padding: 20px;
    border-radius: 100%;

    svg {
      width: 70px;
      height: 70px;
      color: #059669;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    h5 {
      font-size: 1.5rem;

      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      text-align: justify;
      justify-content: center;

      li {
        font-size: 1rem;

        @media (max-width: 768px) {
          font-size: 0.9rem;
        }
      }
    }
  }
`;

interface CampoMotivosFIPPTrucoProps {
  svg?: string;
  titulo: string;
  texto1: string;
  texto2: string;
  texto3: string;
  texto4?: string;
  texto5?: string;
}

export default function CampoMotivosFIPPTruco({
  svg,
  titulo,
  texto1,
  texto2,
  texto3,
  texto4,
  texto5,
}: CampoMotivosFIPPTrucoProps): JSX.Element {
  return (
    <DivEstilizada>
      {svg && (
        <div id="divSvg">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={svg}
            />
          </svg>
        </div>
      )}

      <div>
        <h5>{titulo}</h5>

        <ul>
          <li>{texto1}</li>
          <li>{texto2}</li>
          <li>{texto3}</li>
          {texto4 && <li>{texto4}</li>}
          {texto5 && <li>{texto5}</li>}
        </ul>
      </div>
    </DivEstilizada>
  );
}
