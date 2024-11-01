"use client";

import styled from "styled-components";
import Input, { InputProps } from "../Input";
import Link from "next/link";
import {
  useDadosSalaContext,
  useDadosUsuarioContext,
} from "@/app/contexts/useContext";
import { useEffect } from "react";

const SectionEstilizado = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  max-width: 400px;
  width: 100%;
  border-radius: 20px;
  padding: 35px 20px;
  gap: 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 90%;
    max-height: 80vh;
    gap: 20px;
  }

  h2 {
    font-size: 28px;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 17px;

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    div {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    input[type="submit"] {
      cursor: pointer;
      color: white;
      background-color: #059669;
      font-size: 18px;
      padding: 12px 0;
      border: none;
      border-radius: 15px;
      transition: background-color 0.3s;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }

    input[type="submit"]:hover {
      background-color: #059668ca;
    }
  }
`;

const DivEstilizada = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;

  p {
    font-size: 17px;
  }

  span {
    font-size: 17px;
    color: #059681;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    p,
    span {
      font-size: 15px;
    }
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 18px;
  text-align: center;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 5px;
  }
`;

interface FormularioProps {
  titulo: string;
  inputs: InputProps[];
  linkUrl: string;
  linkTexto: {
    pergunta: string;
    resposta: string;
  };
  textoSubmit: string;
  texto?: string;
}

export default function Formulario({
  titulo,
  inputs,
  linkUrl,
  linkTexto,
  textoSubmit,
  texto,
}: FormularioProps): JSX.Element {
  const { autenticarUsuario, mensagemErro, setMensagemErro, usuario } =
    useDadosUsuarioContext();
  const { cadastroSala } = useDadosSalaContext();

  useEffect(() => {
    setMensagemErro(null);
  }, [setMensagemErro]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    if (textoSubmit === "Cadastrar" || textoSubmit === "Entrar") {
      const nome = formData.get("nome") as string;
      if (textoSubmit === "Cadastrar") {
        if (nome.length < 6) {
          setMensagemErro("O nome deve ter pelo menos 6 caracteres.");
          return;
        }
      }

      const email = formData.get("email") as string;
      if (!email.includes("@")) {
        setMensagemErro("O email deve ser válido.");
        return;
      }

      const senha = formData.get("senha") as string;
      if (senha.length < 6) {
        setMensagemErro("A senha deve ter pelo menos 6 caracteres.");
        return;
      }

      setMensagemErro(null);

      const dados = {
        nome: formData.get("nome") as string | undefined,
        email: formData.get("email") as string | undefined,
        senha: formData.get("senha") as string | undefined,
      };

      if (textoSubmit !== "Cadastrar" && textoSubmit !== "Entrar") {
        setMensagemErro("Tipo de ação inválido.");
        return;
      }

      const tipo = textoSubmit as "Cadastrar" | "Entrar";

      await autenticarUsuario(dados, tipo);
    } else {
      const nomeSala = formData.get("nomeSala") as string;
      if (nomeSala.length < 5) {
        setMensagemErro("O nome da sala deve ter pelo menos 5 caracteres.");
        return;
      }

      setMensagemErro(null);

      const dados = {
        nome: formData.get("nomeSala") as string | undefined,
        usuarioId: usuario?.id,
      };

      cadastroSala(dados);
    }
  };

  return (
    <SectionEstilizado>
      <div>
        <h2>{titulo}</h2>
        <p>{texto}</p>
      </div>

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
  );
}
