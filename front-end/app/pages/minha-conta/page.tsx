'use client'

import InformacoesConta from "@/app/components/InformacoesConta";
import PaginaBase from "@/app/pageBase";
import Link from "next/link";
import styled from "styled-components";

const MainEstilizado = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  width: 100%;
  height: 100vh;

  section{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around; 
  }

  #campoBotaoEditar{
    h2{
      font-size: 40px;
    }

    a{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      background-color: #059669;
      border-radius: 12px;
      padding: 10px 30px;
      color: white;

      svg{
        width: 25px;
        height: 25px;
      }

      p{
        font-size: 18px;
      }
    }
  }
`

export default function MinhaConta(){
  return(
    <PaginaBase>
      <MainEstilizado>
        <section id="campoBotaoEditar">
          <h2>Meu Perfil</h2>

          <Link href="editar-perfil">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <p>Editar Perfil</p>
          </Link>
        </section>

        <section>
          <InformacoesConta />
        </section>
      </MainEstilizado>
    </PaginaBase>
  )
}