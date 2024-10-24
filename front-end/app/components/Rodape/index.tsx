import styled from "styled-components"

const FooterEstilizado = styled.footer`
  background-color: #1F2937;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;

  p{
    color: white;
    font-size: 18px;
  }
`

export default function Rodape(){
  return(
    <FooterEstilizado>
      <p>© 2024 FIPPTruco. Todos os direitos reservados.</p>
    </FooterEstilizado>
  )
}