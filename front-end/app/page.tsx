'use client'

import Cabecalho from "./components/Cabecalho"
import CampoInicial from "./components/CampoInicial"
import InformacoesDoSite from "./components/InformacoesDoSite"

export default function HomePage(){
  return(
    <>
      <Cabecalho />

      <main>
        <CampoInicial />

        <InformacoesDoSite />
      </main>
    </>
  )
}