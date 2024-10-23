import styled from "styled-components"

const SectionEstilizado = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
`

const DivEstilizada = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg{
    width: 20px;
    
  }
`

export default function InformacoesDoSite(){
  return(
    <SectionEstilizado>
      <DivEstilizada>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>

        <h3>Jogue com Amigos</h3>
        <p>Crie salas privadas e desafie seus amigos para partidas emocionantes</p>
      </DivEstilizada>

      <DivEstilizada>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>

        <h3>100% Seguro</h3>
        <p>Ambiente seguro e moderado para sua diversão</p>
      </DivEstilizada>

      <DivEstilizada>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>

        <h3>Rápido e Responsivo</h3>
        <p>Jogue em qualquer dispositivo sem travamentos</p>
      </DivEstilizada>
    </SectionEstilizado>
  )
}