import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { useDadosUsuarioContext } from "@/app/contexts/useContext";
import Link from "next/link";

const DivEstilizada = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  form {
    display: flex;
    flex-direction: column;
  }

  #campoBotoes {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    button {
      border: none;
      border-radius: 10px;
      padding: 10px 30px;
      font-size: 18px;
      background-color: #fff;
      color: black;
      cursor: pointer;
    }

    #botaoSalvar {
      color: #fff;
      background-color: #059669;
    }
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 18px;
  text-align: center;
  margin-bottom: 25px;
`;

interface CampoEditarProps {
  valorNome: string;
  valorEmail: string;
  valorSenha: string;
  valorId: number
}

export default function CampoEditar({
  valorId,
  valorNome,
  valorEmail,
  valorSenha,
}: CampoEditarProps): JSX.Element {
  const [nome, setNome] = useState(valorNome);
  const [email, setEmail] = useState(valorEmail);
  const [senha, setSenha] = useState(valorSenha);
  const { mensagemErro, setMensagemErro, alterarDadosUsuario } =
    useDadosUsuarioContext();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nomeAlterado = nome !== valorNome;
    const emailAlterado = email !== valorEmail;
    const senhaAlterada = senha !== valorSenha;
    const totalAlteracoes = [nomeAlterado, emailAlterado, senhaAlterada].filter(
      Boolean
    ).length;

    let tipo: "TodosDados" | "AlgumDado" | undefined;
    if (totalAlteracoes === 3) {
      tipo = "TodosDados";
    } else if (totalAlteracoes > 0) {
      tipo = "AlgumDado";
    }

    const formData = new FormData(event.currentTarget);

    const nomeForm = formData.get("nome") as string;

    if (nomeForm.length < 6) {
      setMensagemErro("O nome deve ter pelo menos 6 caracteres.");
      return;
    }

    const emailForm = formData.get("email") as string;
    if (!emailForm.includes("@")) {
      setMensagemErro("O email deve ser válido.");
      return;
    }

    const senhaForm = formData.get("senha") as string;
    if (senhaForm.length < 6) {
      setMensagemErro("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setMensagemErro(null);

    const dados = {
      id: valorId,
      nome: nomeForm,
      email: emailForm,
      senha: senhaForm,
    };

    if (!tipo) {
      setMensagemErro("Nenhuma alteração foi feita.");
      return;
    }

    await alterarDadosUsuario(dados, tipo);
  };

  return (
    <DivEstilizada>
      <form onSubmit={handleSubmit}>
        <Input
          tipo="text"
          obrigatorio={false}
          nomeInput="nome"
          nomeLabel="Nome Completo"
          value={nome}
          onChange={(newValue) => setNome(newValue)}
        />
        <Input
          tipo="email"
          obrigatorio={false}
          nomeInput="email"
          nomeLabel="Email"
          value={email}
          onChange={(newValue) => setEmail(newValue)}
        />
        <Input
          tipo="password"
          obrigatorio={false}
          nomeInput="senha"
          nomeLabel="Senha"
          value={senha}
          onChange={(newValue) => setSenha(newValue)}
        />

        {mensagemErro && <ErrorMessage>{mensagemErro}</ErrorMessage>}

        <div id="campoBotoes">
          <Link href="minha-conta">
            <button>Cancelar</button>
          </Link>

          <button id="botaoSalvar" type="submit">
            Salvar Alterações
          </button>
        </div>
      </form>
    </DivEstilizada>
  );
}
