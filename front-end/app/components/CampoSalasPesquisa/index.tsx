import Link from "next/link"
import styled from "styled-components"
import { DivEstilizada } from "../SalasDisponiveis"

const SectionEstilizado = styled.section`
  
  #divCriarSala{
    height: 130px;

    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;

      h2{
        font-size: 30px;
      }

      p{
        font-size: 17px;
      }
    }
  }
`

export default function CamposSalaPesquisa(){
  return(
    <SectionEstilizado>
      <DivEstilizada id="divCriarSala">
        <div>
          <h2>Salas Disponíveis</h2>
          <p>Escolha uma sala para jogar</p>
        </div>

        <Link href="criar-sala">
          <button>Criar Nova Sala</button>
        </Link>
      </DivEstilizada>

      <div>
        
      </div>
    </SectionEstilizado>
  )
}