import styled from "styled-components";

const DivEstilizada = styled.div`
  width: 20%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  background-color: #ecfdf5;
  border-radius: 10px;
  padding: 40px;

  h4 {
    color: #065f46;
    font-size: 24px;
  }

  p,
  li {
    text-align: justify;
    font-size: 17px;
  }

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 85%;
    padding: 20px;

    h4 {
      font-size: 20px;
    }

    p,
    li {
      font-size: 15px;
    }
  }
`;

interface CampoValoresProps {
  titulo: string;
  texto?: string;
  tipo: string;
}

export default function CampoValores({
  titulo,
  texto,
  tipo,
}: CampoValoresProps): JSX.Element {
  const valores = [
    "Fair Play e Respeito",
    "Segurança e Privacidade",
    "Diversão e Competitividade",
    "Inovação Constante",
  ];

  return (
    <DivEstilizada>
      <h4>{titulo}</h4>

      {tipo === "Valores" ? (
        <ul>
          {valores.map((valor, index) => (
            <li key={index}>{valor}</li>
          ))}
        </ul>
      ) : (
        <p>{texto}</p>
      )}
    </DivEstilizada>
  );
}
