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

interface RodapeProps{
  texto: string
}

export default function Rodape({ texto }: RodapeProps): JSX.Element{
  return(
    <FooterEstilizado>
      <p>{texto}</p>
    </FooterEstilizado>
  )
}