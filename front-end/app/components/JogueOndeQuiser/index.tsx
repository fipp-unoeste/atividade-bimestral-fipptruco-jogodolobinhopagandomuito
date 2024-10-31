import styled from "styled-components";
import CampoLugaresJogar from "../CampoLugaresJogar";

export const SectionEstilizado = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  width: 100%;
  padding: 75px 0;
  background-color: #fff;

  h3 {
    font-size: 35px;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  #todasDivs {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;

    @media (max-width: 1124px) {
      width: 90%;
      gap: 20px;
    }

    @media (max-width: 800px) {
      flex-direction: column;
      gap: 30px;
      width: 100%;
    }
  }
`;

export default function JogueOndeQuiser() {
  return (
    <SectionEstilizado>
      <h3>Jogue de Onde Quiser</h3>

      <div id="todasDivs">
        <CampoLugaresJogar
          svg="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          titulo="Desktop"
          texto="Windows e Mac"
        />
        <CampoLugaresJogar
          svg="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          titulo="Web"
          texto="Qulquer Navegador"
        />
      </div>
    </SectionEstilizado>
  );
}
