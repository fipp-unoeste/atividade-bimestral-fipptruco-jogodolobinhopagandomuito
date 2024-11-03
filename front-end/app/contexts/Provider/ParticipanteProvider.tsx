"use client";

import { useState } from "react";
import useContexts, { DadosParticipante } from "../Context";
import axios from "axios";
import { useDadosUsuarioContext } from "../useContext";

export const ParticipanteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [participantes, setParticipantes] = useState<
    DadosParticipante[] | null
  >(null);
  const { setMensagemErro } = useDadosUsuarioContext();

  const cadastroParticipante = async (dadosParticipante: DadosParticipante) => {
    try {
      let response;
      const url = "http://localhost:5000/participantes/";

      response = await axios.post(url, dadosParticipante);

      console.log("Dados enviados com sucesso:", response.data);

      setParticipantes(response.data.participante);
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
    <useContexts.DadosParticipanteContext.Provider
      value={{
        participantes,
        setParticipantes,
        cadastroParticipante,
      }}
    >
      {children}
    </useContexts.DadosParticipanteContext.Provider>
  );
};
