"use client";

import { useState } from "react";
import useContexts, { DadosJogo } from "../Context";
import axios from "axios";
import { useDadosUsuarioContext } from "../useContext";
import { useRouter } from "next/navigation";

export const JogoProvider = ({ children }: { children: React.ReactNode }) => {
  const [jogos, setJogos] = useState<DadosJogo[] | null>(null);
  const router = useRouter();
  const { setMensagemErro } = useDadosUsuarioContext();

  const cadastroJogo = async (dados: DadosJogo) => {
    try {
      let response;
      console.log("teste");
      const url = "http://localhost:5000/jogos/";

      response = await axios.post(url, dados);

      console.log("Dados enviados com sucesso:", response.data);

      setJogos(response.data.jogo)

      router.push("jogo");
    } catch (error: unknown) {
      console.error("Erro:", error);

      if (axios.isAxiosError(error)) {
        setMensagemErro(
          error.response?.data?.msg ||
            "Erro ao enviar os dados. Tente novamente mais tarde."
        );
      } else {
        setMensagemErro("Erro desconhecido. Tente novamente.");
      }
    }
  };

  return (
    <useContexts.DadosJogoContext.Provider
      value={{
        jogos,
        setJogos,
        cadastroJogo,
      }}
    >
      {children}
    </useContexts.DadosJogoContext.Provider>
  );
};
