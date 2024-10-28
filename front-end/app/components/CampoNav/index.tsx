import Link from "next/link";
import styled from "styled-components";

const CampoNavEstilizado = styled.p<{ estilo?: string }>`
  font-size: 20px;
  cursor: pointer;
  color: white;
  padding: 10px 20px;

  ${({ estilo }) =>
    estilo === "areaJogador" &&
    `
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  `}

  ${({ estilo }) =>
    estilo === "sair" &&
    `
    background-color: #DC2626;
    border-radius: 5px;

    :hover{
      background-color: #0f0202;
    }
  `}
`;

interface CampoNavProps {
  texto: string;
  link: string;
  estilo?: string;
  onClick?: () => void;
}

export default function CampoNav({ texto, link, estilo, onClick }: CampoNavProps): JSX.Element {
  return (
    <Link href={link}>
      <CampoNavEstilizado estilo={estilo} onClick={onClick}>
        {texto}
      </CampoNavEstilizado>
    </Link>
  );
}