'use client'

import { useState } from "react"
import useContexts, { DadosSala } from "../Context"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useDadosUsuarioContext } from "../useContext"

export const SalaProvider = ({ children }: { children: React.ReactNode }) => {
  const [sala, setSala] = useState<DadosSala | null>(null)
  const router = useRouter()
  const { setMensagemErro } = useDadosUsuarioContext()

  const cadastroSala = async (dados: DadosSala) => {
    try{
      let response

      const url = "http://localhost:5000/salas/"

      response = await axios.post(url, dados)

      console.log('Dados enviados com sucesso:', response.data)
      
      setSala(response.data.sala)
      
      router.push("area-do-jogador")
    } 
    catch(error: unknown){
      console.error("Erro:", error)

      if(axios.isAxiosError(error)){ setMensagemErro(error.response?.data?.msg || 'Erro ao enviar os dados. Tente novamente mais tarde.') } 
      else{ setMensagemErro('Erro desconhecido. Tente novamente.') }
    }
  }

  return(
    <useContexts.DadosSalaContext.Provider value={{ sala, setSala, cadastroSala }}>
      {children}
    </useContexts.DadosSalaContext.Provider>
  )
}