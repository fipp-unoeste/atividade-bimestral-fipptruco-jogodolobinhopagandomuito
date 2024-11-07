"use client";

import InformacoesConta from "@/app/components/InformacoesConta";
import { useAutenticacaoContext } from "@/app/contexts/useContext";
import PaginaBase from "@/app/pageBase";
import Link from "next/link";
import { useEffect } from "react";
import styled from "styled-components";

const MainEstilizado = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  width: 100%;
  height: 100vh;
  padding: 20px;

  section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  #campoBotaoEditar {
    h2 {
      font-size: 32px;
      text-align: center;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      background-color: #059669;
      border-radius: 12px;
      padding: 10px 30px;
      color: white;

      svg {
        width: 25px;
        height: 25px;
      }

      p {
        font-size: 18px;
      }
    }
  }

  @media (max-width: 768px) {
    gap: 30px;

    #campoBotaoEditar {
      h2 {
        font-size: 28px;
      }

      a {
        padding: 10px 20px;
        p {
          font-size: 16px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    padding: 10px;

    #campoBotaoEditar {
      h2 {
        font-size: 24px;
      }

      a {
        padding: 8px 15px;
        p {
          font-size: 14px;
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

export default function MinhaConta() {
  const { acessarPagina } = useAutenticacaoContext();

  useEffect(() => {
    acessarPagina();
  }, [acessarPagina]);

  return (
    <PaginaBase>
      <MainEstilizado>
        <section id="campoBotaoEditar">
          <h2>Meu Perfil</h2>

          <Link href="editar-perfil">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            <p>Editar Perfil</p>
          </Link>
        </section>

        <section>
          <InformacoesConta />
        </section>
      </MainEstilizado>
    </PaginaBase>
  );
}
