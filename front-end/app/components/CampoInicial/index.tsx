import Link from "next/link";
import styled from "styled-components";

interface LogadoProps {
  $isLogado?: boolean;
}

const SectionEstilizado = styled.section`
  background-color: #1a1a1a;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.1) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  color: white;
  padding: 100px 20px;
  text-align: center;

  h1 {
    font-size: 36px;
    @media (min-width: 768px) {
      font-size: 52px;
    }
  }

  p {
    font-size: 18px;
    @media (min-width: 768px) {
      font-size: 22px;
    }
  }
`;

const DivEstilizada = styled.div<LogadoProps>`
  display: flex;
  flex-direction: ${({ $isLogado }) => ($isLogado ? "column" : "row")};
  align-items: center;
  justify-content: center;
  gap: ${({ $isLogado }) => ($isLogado ? "20px" : "50px")};
  width: 100%;
  max-width: 600px;

  :hover {
    border-radius: 10px;
    background-color: #374151a2;
  }

  #botaoCriarConta {
    background-color: #059669;
  }

  #botaoCriarConta:hover {
    border-radius: 10px;
    background-color: #059668ae;
  }
`;

const Button = styled.button<LogadoProps>`
  border-radius: 10px;
  padding: ${({ $isLogado }) => ($isLogado ? "15px 70px" : "15px 35px")};
  border: none;
  cursor: pointer;
  background-color: #374151;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ $isLogado }) => ($isLogado ? "10px" : "5px")};
  font-size: ${({ $isLogado }) => ($isLogado ? "20px" : "16px")};
  text-align: justify;

  @media (max-width: 600px) {
    font-size: ${({ $isLogado }) => ($isLogado ? "14px" : "15px")};
  }

  .tituloBotao {
    font-size: ${({ $isLogado }) => ($isLogado ? "28px" : "18px")};
    font-weight: 600;

    @media (max-width: 600px) {
      font-size: ${({ $isLogado }) => ($isLogado ? "24px" : "15px")};
    }
  }
`;

interface CampoInicialProps {
  titulo: string;
  subTitulo: string;
  tituloBotao1?: string;
  subTituloBotao1?: string;
  linkBotao1?: string;
  tituloBotao2?: string;
  subTituloBotao2?: string;
  linkBotao2?: string;
  isLogado?: boolean;
}

export default function CampoInicial({
  titulo,
  subTitulo,
  tituloBotao1,
  subTituloBotao1,
  linkBotao1,
  tituloBotao2,
  subTituloBotao2,
  linkBotao2,
  isLogado = false,
}: CampoInicialProps): JSX.Element {
  return (
    <SectionEstilizado>
      <h1>{titulo}</h1>
      <p>{subTitulo}</p>

      <DivEstilizada $isLogado={isLogado}>
        {linkBotao1 && (
          <Link href={linkBotao1}>
            <Button $isLogado={isLogado} id="botaoCriarConta">
              <span className="tituloBotao">{tituloBotao1}</span>
              <span>{subTituloBotao1}</span>
            </Button>
          </Link>
        )}

        {linkBotao2 && (
          <Link href={linkBotao2}>
            <Button $isLogado={isLogado}>
              <span className="tituloBotao">{tituloBotao2}</span>
              <span>{subTituloBotao2}</span>
            </Button>
          </Link>
        )}
      </DivEstilizada>
    </SectionEstilizado>
  );
}
