import styled from "styled-components"

const DivEstilizada = styled.div<{ $isSelected: boolean }>`
  border-radius: 20px;
  background-color: #F9FAFB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 35px;
  padding: 20px 30px;
  width: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.30);
  transition: transform 0.3s ease;

  &:hover{
    transform: translateY(-3px);
  }

  border: ${({ $isSelected }) => ($isSelected ? "6px solid #16A34A" : "none")};

  h3{
    font-size: 30px;
  }

  div{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    p{
      font-size: 17px;
      width: 100%;
      background-color: #E5E7EB;
      border-radius: 15px;
      padding: 15px;
    }
  }
`

interface CampoEquipeProps{
  nomeEquipe: string
  nomeJogador1?: string
  nomeJogador2?: string
  isSelected: boolean
  onClick: () => void
}

export default function CampoEquipe({ nomeEquipe, nomeJogador1, nomeJogador2, isSelected, onClick }: CampoEquipeProps): JSX.Element{
  return(
    <DivEstilizada $isSelected={isSelected} onClick={onClick}>
      <h3>{nomeEquipe}</h3>

      <div>
        <p>{nomeJogador1}</p>
        <p>{nomeJogador2}</p>
      </div>
    </DivEstilizada>
  )
}