'use client'

import Cabecalho from "./components/Cabecalho"
import CampoInicial from "./components/CampoInicial"
import InformacoesDoSite from "./components/InformacoesDoSite"
import JogueAgora from "./components/JogueAgora"
import Rodape from "./components/Rodape"

export default function HomePage(){
  return(
    <>
      <Cabecalho />

      <main>
        <CampoInicial />

        <InformacoesDoSite />

        <JogueAgora />
      </main>

      <Rodape />
    </>
  )
}