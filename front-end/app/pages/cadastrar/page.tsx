'use client'

import Cabecalho from "@/app/components/Cabecalho"
import Formulario from "@/app/components/Formulario"
import Rodape from "@/app/components/Rodape"
import styled from "styled-components"

export const MainEstilizado = styled.main`
  height: 100vh;
  background-color: #1a1a1a;
  background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Cadastrar(){
  const inputs = [
    { tipo: "text", obrigatorio: true, placeholder: "Seu nome completo", nomeInput: "nome", nomeLabel: "Nome" },
    { tipo: "email", obrigatorio: true, placeholder: "seu@email.com", nomeInput: "email", nomeLabel: "Email" },
    { tipo: "password", obrigatorio: false, placeholder: "********", nomeInput: "senha", nomeLabel: "Senha" },
  ]

  return(
    <>
      <Cabecalho />

      <MainEstilizado>
        <Formulario 
          titulo="Criar Conta"
          inputs={inputs}
          linkUrl="entrar"
          linkTexto={{ pergunta: "Já tem uma conta?", resposta: "Faça login aqui" }}
          textoSubmit="Cadastrar"
        />
      </MainEstilizado>

      <Rodape />
    </>
  )
}