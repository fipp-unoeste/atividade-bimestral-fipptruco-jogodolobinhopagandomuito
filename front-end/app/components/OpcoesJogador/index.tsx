import Link from "next/link";
import styled from "styled-components";

const DivEstilizada = styled.div`
  background-color: #ffffff;
  width: 310px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  border-radius: 20px;
  text-align: justify;
  padding: 0 35px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.55);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  #divSvg {
    border-radius: 100%;
    padding: 15px;
    background-color: #d1fae5;

    svg {
      width: 40px;
      height: 40px;
      color: #059669;
    }
  }

  button {
    border-radius: 10px;
    padding: 12px 30px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    background-color: #059669;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    svg {
      width: 22px;
      height: 22px;
    }
  }

  button:hover {
    background-color: #059668ae;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    padding: 20px;
    text-align: center;

    h3 {
      font-size: 22px;
    }

    p {
      font-size: 16px;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
    }
  }
`;

interface OpcoesJogadorProps {
  titulo: string;
  texto: string;
  textoBotao: string;
  svg: string;
  linkBotao: string;
  svgBotao: string;
}

export default function OpcoesJogador({
  titulo,
  texto,
  textoBotao,
  svg,
  linkBotao,
  svgBotao,
}: OpcoesJogadorProps): JSX.Element {
  return (
    <DivEstilizada>
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

      <div>
        <h3>{titulo}</h3>
        <p>{texto}</p>
      </div>

      <Link href={linkBotao}>
        <button>
          {textoBotao}
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={svgBotao}
            />
          </svg>
        </button>
      </Link>
    </DivEstilizada>
  );
}
