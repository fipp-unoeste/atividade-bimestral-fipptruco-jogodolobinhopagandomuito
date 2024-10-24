import Link from "next/link"
import styled from "styled-components"

const SectionEstilizado = styled.section`
  background-color: #1a1a1a;
  background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  color: white;

  h1{
    font-size: 52px;
  }

  p{
    font-size: 22px;
  }
`

const DivEstilizada = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  button{
    border-radius: 10px;
    padding: 15px 35px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    background-color: #374151;
  }

  button:hover{
    background-color: #374151a2;
  }

  #botaoCriarConta{
    background-color: #059669;
  }

  #botaoCriarConta:hover{
    background-color: #059668ae;
  }
`

export default function CampoInicial(){
  return(
    <SectionEstilizado>
      <h1>Bem-vindo ao FIPPTruco</h1>
      <p>O melhor lugar para jogar truco online com seus amigos!</p>

      <DivEstilizada>
        <Link href="pages/cadastrar">
          <button id="botaoCriarConta">Criar Conta</button>
        </Link>

        <Link href="pages/entrar">
          <button>Entrar</button>
        </Link>
      </DivEstilizada>
    </SectionEstilizado>
  )
}