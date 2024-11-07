import styled from "styled-components"

const DivEstilizado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: white;

  div{
    border-radius: 100%;
    background-color: #374151;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
  }
`

interface CampoJogadorProps{
  numeroJogador: string
  nomeJogador: string
}

export default function CampoJogador({ numeroJogador, nomeJogador }: CampoJogadorProps): JSX.Element{
  return(
    <DivEstilizado>
      <div>
        <p>{numeroJogador}</p>
      </div>

      <p>{nomeJogador}</p>
    </DivEstilizado>
  )
}