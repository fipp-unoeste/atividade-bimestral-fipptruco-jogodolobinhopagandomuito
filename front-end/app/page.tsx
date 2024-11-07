"use client";

import CampoInicial from "./components/CampoInicial";
import InformacoesDoSite from "./components/InformacoesDoSite";
import JogueAgora from "./components/JogueAgora";
import JogueOndeQuiser from "./components/JogueOndeQuiser";
import PorqueFIPPTruco from "./components/PorqueFIPPTruco";
import { useAutenticacaoContext } from "./contexts/useContext";
import PaginaBase from "./pageBase";

export default function HomePage() {
  const { isAutenticado } = useAutenticacaoContext();

  return (
    <PaginaBase>
      <main>
        {!isAutenticado ? (
          <>
            <CampoInicial
              titulo="Bem-vindo ao FIPPTruco"
              subTitulo="O melhor lugar para jogar truco online com seus amigos!"
              tituloBotao1="Criar Conta"
              tituloBotao2="Entrar"
              linkBotao1="pages/cadastrar"
              linkBotao2="pages/entrar"
            />
          </>
        ) : (
          <>
            <CampoInicial
              titulo="Pronto para jogar?"
              subTitulo="Escolha uma das opções abaixo para começar:"
              tituloBotao1="Criar Sala"
              tituloBotao2="Entrar em uma Sala"
              subTituloBotao1="Crie sua própria sala e convide amigos para jogar"
              subTituloBotao2="Entre em uma sala com outros jogadores online"
              linkBotao1="pages/criar-sala"
              linkBotao2="pages/entrar-sala"
              isLogado={true}
            />
          </>
        )}

        <InformacoesDoSite />

        <PorqueFIPPTruco />

        <JogueOndeQuiser />

        {!isAutenticado ? <JogueAgora /> : null}
      </main>
    </PaginaBase>
  );
}
