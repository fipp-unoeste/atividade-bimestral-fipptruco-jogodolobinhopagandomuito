"use client";

import CampoEditar from "@/app/components/CampoEditar";
import { useDadosUsuarioContext } from "@/app/contexts/useContext";
import PaginaBase from "@/app/pageBase";
import Link from "next/link";
import styled from "styled-components";

const MainEstilizado = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 60px;

  #campoBotao {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    h2 {
      font-size: 40px;
    }

    div {
      width: 10%;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        color: #059669;

        svg {
          width: 23px;
          height: 23px;
        }

        p {
          font-size: 18px;
        }
      }
    }
  }

  h3 {
    font-size: 25px;
  }

  #campoInputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 40px;
    background-color: #fff;
    border-radius: 20px;
  }
`;

export default function EditarPerfil() {
  const { usuario } = useDadosUsuarioContext();

  return (
    <PaginaBase>
      <MainEstilizado>
        <section id="campoBotao">
          <h2>Editar Perfil</h2>

          <div>
            <Link href="minha-conta">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <p>Voltar ao Perfil</p>
            </Link>
          </div>
        </section>

        <section id="campoInputs">
          <h3>Todas Informações</h3>

          {usuario && (
            <CampoEditar
              valorId={usuario?.id || 0}
              valorNome={usuario?.nome || ""}
              valorEmail={usuario?.email || ""}
              valorSenha={usuario?.senha || ""}
            />
          )}
        </section>
      </MainEstilizado>
    </PaginaBase>
  );
}
