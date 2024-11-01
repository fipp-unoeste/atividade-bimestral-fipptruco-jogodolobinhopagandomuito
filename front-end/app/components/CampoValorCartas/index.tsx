import styled from "styled-components";

const DivEstilizada = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h4 {
    font-size: 22px;
  }

  #divManilhas,
  #divCartas {
    display: flex;
    flex-direction: column;
    gap: 15px;

    div {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  #numeroManilha {
    padding: 8px;
    border-radius: 100%;
    background-color: #d1fae5;
    color: #059669;
    font-size: 18px;
  }

  @media (max-width: 1024px) {
    width: 60%;
    h4 {
      font-size: 20px;
    }
  }

  @media (max-width: 768px) {
    width: 80%;
    h4 {
      font-size: 18px;
    }

    #numeroManilha {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    h4 {
      font-size: 16px;
    }

    #numeroManilha {
      font-size: 14px;
    }
  }
`;

interface CampoValorCartasProps {
  titulo: string;
  tipoDiv: string;
}

export default function CampoValorCartas({
  titulo,
  tipoDiv,
}: CampoValorCartasProps): JSX.Element {
  const cartas = [
    "3 (Três)",
    "2 (Dois)",
    "A (Ás)",
    "K (Rei)",
    "J (Valete)",
    "Q (Dama)",
    "7 (Sete)",
    "6 (Seis)",
    "5 (Cinco)",
    "4 (Quatro)",
  ];

  const manilhas = [
    {
      numero: "4♣",
      texto: "Zap - Quatro de Pauis",
    },
    {
      numero: "7♥",
      texto: "Sete de Copas",
    },
    {
      numero: "A♠",
      texto: "Ás de Espadas",
    },
    {
      numero: "7♦",
      texto: "Sete de Ouros",
    },
  ];

  return (
    <DivEstilizada>
      <h4>{titulo}</h4>

      <div>
        {tipoDiv === "Manilhas" ? (
          <div id="divManilhas">
            {manilhas.map((manilha, index) => (
              <div key={index}>
                <div id="numeroManilha">
                  <p>{manilha.numero}</p>
                </div>

                <p>{manilha.texto}</p>
              </div>
            ))}
          </div>
        ) : (
          <div id="divCartas">
            {cartas.map((carta, index) => (
              <p key={index}>{carta}</p>
            ))}
          </div>
        )}
      </div>
    </DivEstilizada>
  );
}
