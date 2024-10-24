import Link from "next/link"
import styled from "styled-components"

const SectionEstilizado = styled.section`
  background-color: #F3F4F6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 300px;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    h3{
      font-size: 30px;
    }

    p{
      font-size: 17px;
    }
  }

  button{
    cursor: pointer;
    border: none;
    border-radius: 10px;
    padding: 13px 42px;
    color: white;
    background-color: #059669;
    font-size: 18px;
  }
`

export default function JogueAgora(){
  return(
    <SectionEstilizado>
      <div>
        <h3>Comece a jogar agora!</h3>
        <p>Crie sua conta gratuitamente e junte-se a milhares de jogadores</p>
      </div>

      <Link href="pages/cadastrar">
        <button>Criar Conta Grátis</button>
      </Link>
    </SectionEstilizado>
  )
}