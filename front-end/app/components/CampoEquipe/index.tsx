import styled from "styled-components";

const DivEstilizada = styled.div<{ $isSelected: boolean }>`
  border-radius: 20px;
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 20px;
  padding: 15px 20px;
  width: 80%;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  border: ${({ $isSelected }) => ($isSelected ? "6px solid #16A34A" : "none")};

  h3 {
    font-size: 24px;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    p {
      font-size: 16px;
      width: 100%;
      background-color: #e5e7eb;
      border-radius: 15px;
      padding: 10px;

      @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px;
      }

      @media (max-width: 480px) {
        font-size: 12px;
        padding: 6px;
      }
    }
  }
`;

interface CampoEquipeProps {
  nomeEquipe: string;
  nomeJogador1?: string;
  nomeJogador2?: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function CampoEquipe({
  nomeEquipe,
  nomeJogador1,
  nomeJogador2,
  isSelected,
  onClick,
}: CampoEquipeProps): JSX.Element {
  return (
    <DivEstilizada $isSelected={isSelected} onClick={onClick}>
      <h3>{nomeEquipe}</h3>

      <div>
        <p>{nomeJogador1}</p>
        <p>{nomeJogador2}</p>
      </div>
    </DivEstilizada>
  );
}
