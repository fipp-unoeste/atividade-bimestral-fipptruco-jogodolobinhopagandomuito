import Link from "next/link";
import styled from "styled-components";
import CampoNav from "../CampoNav";
import { useAutenticacaoContext } from "@/app/contexts/useContext";

const HeaderEstilizado = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  background-color: rgb(6, 95, 70);
  height: 100px;
  color: white;

  h2 {
    font-size: 28px;

    @media (min-width: 768px) {
      font-size: 35px;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
    height: auto;
    padding: 20px;
  }
`;

const NavEstilizada = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 600px) {
    gap: 10px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 25px;
    width: 100%;
  }
`;

interface CabecalhoProps {
  titulo: string;
}

export default function Cabecalho({ titulo }: CabecalhoProps): JSX.Element {
  const { isAutenticado, logout } = useAutenticacaoContext();

  return (
    <HeaderEstilizado>
      <Link href="/" aria-label="Página inicial">
        <h2>{titulo}</h2>
      </Link>

      <NavEstilizada>
        <CampoNav texto="Como Jogar" link="/pages/como-jogar" />
        <CampoNav texto="Sobre" link="/pages/sobre" />

        {isAutenticado && (
          <>
            <CampoNav
              texto="Área do Jogador"
              link="/pages/area-do-jogador"
              estilo="areaJogador"
            />
            <CampoNav texto="Sair" link="/" estilo="sair" onClick={logout} />
          </>
        )}
      </NavEstilizada>
    </HeaderEstilizado>
  );
}
