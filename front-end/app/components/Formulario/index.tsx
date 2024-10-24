import styled from "styled-components"
import Input, { InputProps } from "../Input"
import Link from "next/link"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

const SectionEstilizado = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  width: 32%;
  height: auto;
  border-radius: 20px;
  padding: 35px 0;
  gap: 40px;

  h2{
    font-size: 35px;
  }

  form{
    display: flex;
    flex-direction: column;
    gap: 5px;

    div{
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    input[type="submit"]{
      cursor: pointer;
      color: white;
      background-color: #059669;
      font-size: 18px;
      padding: 12px 0;
      border: none;
      border-radius: 15px;
    }

    input[type="submit"]:hover{
      background-color: #059668ca;
    }
  }
`

const DivEstilizada = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  p{
    font-size: 17px;
  }

  span{
    font-size: 17px;
    color: #059681;
  }
`

const ErrorMessage = styled.span`
  color: red;
  font-size: 18px;
  text-align: center;
  margin-bottom: 25px;
`;

interface FormularioProps{
  titulo: string; 
  inputs: InputProps[]; 
  linkUrl: string;
  linkTexto: {
    pergunta: string; 
    resposta: string;
  };
  textoSubmit: string;
}

export default function Formulario({ titulo, inputs, linkUrl, linkTexto, textoSubmit }: FormularioProps): JSX.Element{
  const [mensagemErro, setMensagemErro] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const nome = formData.get("nome") as string
    if(nome.length < 6){
      setMensagemErro("O nome deve ter pelo menos 6 caracteres.")
      return
    }

    const email = formData.get("email") as string
    if(!email.includes("@")){
      setMensagemErro("O email deve ser válido.")
      return
    }

    const senha = formData.get("senha") as string
    if(senha.length < 6){
      setMensagemErro("O senha deve ter pelo menos 6 caracteres.")
      return
    }

    setMensagemErro(null)

    const dados = {
      nome: formData.get("nome"),
      email: formData.get("email"),
      senha: formData.get("senha"),
    }

    try {
      const response = await axios.post("http://localhost:5000/usuarios/", dados)
      console.log('Dados enviados com sucesso:', response.data)

      setMensagemErro(null)
      router.push('/')
    } 
    catch(error: unknown){
      console.error("Erro:", error)

      if(axios.isAxiosError(error)){ setMensagemErro(error.response?.data?.msg || 'Erro ao enviar os dados. Tente novamente mais tarde.') } 
      else{ setMensagemErro('Erro desconhecido. Tente novamente.') }
    }
  }

  return(
    <SectionEstilizado>
      <h2>{titulo}</h2>

      <form onSubmit={handleSubmit}>
        {inputs.map((input, index) => (
          <div key={index}>
            <Input
              tipo={input.tipo}
              obrigatorio={input.obrigatorio}
              placeholder={input.placeholder}
              nomeInput={input.nomeInput}
              nomeLabel={input.nomeLabel}
            />
          </div>
        ))}

        {mensagemErro && <ErrorMessage>{mensagemErro}</ErrorMessage>}

        <input type="submit" value={textoSubmit} />
      </form>

      <DivEstilizada>
        <p>{linkTexto.pergunta}</p>
        <Link href={linkUrl}>
          <span>{linkTexto.resposta}</span>
        </Link>
      </DivEstilizada>
    </SectionEstilizado>
  )
}