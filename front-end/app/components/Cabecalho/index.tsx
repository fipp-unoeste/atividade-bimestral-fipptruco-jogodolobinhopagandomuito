import Link from "next/link";
import styled from "styled-components";
import CampoNav from "../CampoNav";
import { useAutenticacaoContext } from "@/app/contexts/useContext";

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
`

interface CabecalhoProps{
  titulo: string
}

export default function Cabecalho({ titulo }: CabecalhoProps): JSX.Element{
  const { isAutenticado, logout } = useAutenticacaoContext()

  return(
    <HeaderEstilizado>
      <Link href="/">
        <h2>{titulo}</h2>
      </Link>

      <NavEstilizada>
        <CampoNav 
          texto="Como Jogar"
          link="/pages/como-jogar"
        />    

        <CampoNav 
          texto="Sobre"
          link="/pages/sobre"
        />

        {isAutenticado ? (
          <>
            <CampoNav 
              texto="Área do Jogador"
              link="/pages/area-do-jogador"
              estilo="areaJogador"
            />

            <CampoNav 
              texto="Sair"
              link="/"
              estilo="sair"
              onClick={logout}
            />
          </>
        ) : null}
      </NavEstilizada>
    </HeaderEstilizado>
  )
}