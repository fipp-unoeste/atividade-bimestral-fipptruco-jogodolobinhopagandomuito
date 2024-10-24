'use client'

import { useState } from "react"
import useContexts from "../Context"
import { DadosUsuario } from "../Context"
import axios from "axios"
import { useRouter } from "next/navigation"

export const UsuarioProvider = ({ children }: { children: React.ReactNode }) => {
  const [usuario, setUsuario] = useState<DadosUsuario | null>(null)
  const [isAutenticado, setIsAutenticado] = useState(false)
  const [mensagemErro, setMensagemErro] = useState<string | null>(null)
  const router = useRouter()

  const autenticarUsuario = async (dados: DadosUsuario, tipo: "Cadastrar" | "Entrar") => {
    setMensagemErro(null)

    try{
      let response

      const url = tipo === "Cadastrar" ? "http://localhost:5000/usuarios/" : "http://localhost:5000/usuarios/entrar"

      response = await axios.post(url, dados)

      console.log('Dados enviados com sucesso:', response.data)

      setUsuario(response.data.usuario)
      setIsAutenticado(true)
      
      if(tipo == "Cadastrar"){ router.push("entrar") }
      else{ router.push("area-do-jogador") }
    } 
    catch(error: unknown){
      console.error("Erro:", error)

      if(axios.isAxiosError(error)){ setMensagemErro(error.response?.data?.msg || 'Erro ao enviar os dados. Tente novamente mais tarde.') } 
      else{ setMensagemErro('Erro desconhecido. Tente novamente.') }
    }
  }

  return (
    <useContexts.DadosUsuarioContext.Provider value={{ usuario, setUsuario, autenticarUsuario, mensagemErro, setMensagemErro }}>
      <useContexts.AutenticacaoContext.Provider value={{ isAutenticado, setIsAutenticado }}>
        {children}
      </useContexts.AutenticacaoContext.Provider>
    </useContexts.DadosUsuarioContext.Provider>
  )
}