import styled from "styled-components";

const FooterEstilizado = styled.footer`
  background-color: #1f2937;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  p {
    color: white;
    font-size: 18px;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 15px;

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;

    p {
      font-size: 14px;
    }
  }
`;

interface RodapeProps {
  texto: string;
}

export default function Rodape({ texto }: RodapeProps): JSX.Element {
  return (
    <FooterEstilizado>
      <p>{texto}</p>
    </FooterEstilizado>
  );
}
