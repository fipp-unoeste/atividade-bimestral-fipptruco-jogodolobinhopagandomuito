import Link from "next/link";
import styled from "styled-components";

const SectionEstilizadoo = styled.section`
  background-color: #f3f4f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: auto;
  padding: 30px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    h3 {
      font-size: 30px;
      text-align: center;
      margin: 0;
    }

    p {
      font-size: 17px;
      text-align: center;
      margin: 0;
    }
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 10px;
    padding: 13px 42px;
    color: white;
    background-color: #059669;
    font-size: 18px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #047a56;
    }
  }

  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;

    div {
      h3 {
        font-size: 24px;
      }

      p {
        font-size: 15px;
      }
    }

    button {
      padding: 10px 30px;
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    div {
      h3 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
      }
    }

    button {
      padding: 8px 20px;
      font-size: 14px;
    }
  }
`;

export default function JogueAgora() {
  return (
    <SectionEstilizadoo>
      <div>
        <h3>Comece a jogar agora!</h3>
        <p>Crie sua conta gratuitamente e junte-se a milhares de jogadores</p>
      </div>

      <Link href="pages/cadastrar" passHref>
        <button>Criar Conta Grátis</button>
      </Link>
    </SectionEstilizadoo>
  );
}
