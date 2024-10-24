'use client'

import Cabecalho from "@/app/components/Cabecalho"
import Formulario from "@/app/components/Formulario"
import Rodape from "@/app/components/Rodape"
import { MainEstilizado } from "../cadastrar/page"

export default function Entrar(){
  const inputs = [
    { tipo: "email", obrigatorio: true, placeholder: "seu@email.com", nomeInput: "email", nomeLabel: "Email" },
    { tipo: "password", obrigatorio: true, placeholder: "********", nomeInput: "senha", nomeLabel: "Senha" },
  ]

  return(
    <>
      <Cabecalho />

      <MainEstilizado>
        <Formulario 
          titulo="Entrar no FIPPTruco"
          inputs={inputs}
          linkUrl="cadastrar"
          linkTexto={{ pergunta: "Ainda não tem uma conta?", resposta: "Cadastre-se aqui" }}
          textoSubmit="Entrar"
        />
      </MainEstilizado>

      <Rodape />
    </>
  )
}