import styled from "styled-components";
import CampoValorCartas from "../CampoValorCartas";
import { SectionEstilizado } from "../JogueOndeQuiser";

const DivEstilizada = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background-color: #FFF;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.35);
  padding: 20px 0;
  width: 50%;
`

export default function ValorCartas() {
  return (
    <SectionEstilizado style={{backgroundColor: `#F9FAFB`}}>
      <h3>Valor das Cartas</h3>

      <DivEstilizada>
        <CampoValorCartas 
          titulo="Manilhas (Mais Fortes)"
          tipoDiv="Manilhas"
        />

        <CampoValorCartas 
          titulo="Outras Cartas (Em Ordem)"
          tipoDiv="Cartas"
        />
      </DivEstilizada>
    </SectionEstilizado>
  );
}
