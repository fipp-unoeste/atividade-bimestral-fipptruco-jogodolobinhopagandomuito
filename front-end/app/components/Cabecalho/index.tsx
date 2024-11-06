import Link from "next/link";
import styled from "styled-components";
import CampoNav from "../CampoNav";
import {
  useAutenticacaoContext,
  useDadosJogoContext,
  useDadosParticipanteContext,
  useDadosSalaContext,
  useSalaJogoContext,
} from "@/app/contexts/useContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

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

const PEstilizado = styled.p`
  font-size: 18px;
  color: rgb(187 247 208);
`;

interface CabecalhoProps {
  titulo: string;
}

export default function Cabecalho({ titulo }: CabecalhoProps): JSX.Element {
  const { isAutenticado, logout } = useAutenticacaoContext();
  const { isSalaJogo } = useSalaJogoContext();
  const { salaEscolhida } = useDadosSalaContext();
  const { sairDoJogo, jogos } = useDadosJogoContext();
  const { fimDeJogo, participantes } = useDadosParticipanteContext();
  const [dataFormatada, setDataFormatada] = useState<string | null>(null);
  const router = useRouter();

  const sairDaPartida = async () => {
    const dataAtual = new Date();
    const dataAtualFormatada = dataAtual.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    setDataFormatada(dataAtualFormatada);

    if (jogos?.id && participantes?.id) {
      await fimDeJogo(participantes?.id, dataAtualFormatada);
      await sairDoJogo(jogos?.id, dataAtualFormatada);
    } else {
      console.log("Jogo ou Participante não encontrados!");
    }

    router.push("area-do-jogador");
  };

  return (
    <HeaderEstilizado>
      <Link
        href="/"
        aria-label="Página inicial"
        style={{
          cursor: isSalaJogo ? "default" : "pointer",
          pointerEvents: isSalaJogo ? "none" : "auto",
        }}
      >
        <h2>{titulo}</h2>
      </Link>

      <NavEstilizada>
        {!isSalaJogo ? (
          <>
            <CampoNav texto="Como Jogar" link="/pages/como-jogar" />
            <CampoNav texto="Sobre" link="/pages/sobre" />

            {isAutenticado && (
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
            )}
          </>
        ) : (
          <>
            <PEstilizado>Sala: {salaEscolhida?.nome}</PEstilizado>

            <CampoNav
              texto="Sair"
              link="area-do-jogador"
              estilo="sair"
              onClick={sairDaPartida}
            />
          </>
        )}
      </NavEstilizada>
    </HeaderEstilizado>
  );
}
