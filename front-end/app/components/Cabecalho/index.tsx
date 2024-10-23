import Link from "next/link";
import styled from "styled-components";

const HeaderEstilizado = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(6, 95, 70);
  height: 100px;
  color: white;

  h2{
    font-size: 35px;
  }
`

const NavEstilizada = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  p{
    font-size: 20px;
  }
`

export default function Cabecalho(){
  return(
    <HeaderEstilizado>
      <Link href="/">
        <h2>FIPPTruco</h2>
      </Link>

      <NavEstilizada>
        <Link href="/">
          <p>Como Jogar</p>
        </Link>
        <Link href="/">
          <p>Sobre</p>
        </Link>
      </NavEstilizada>
    </HeaderEstilizado>
  )
}