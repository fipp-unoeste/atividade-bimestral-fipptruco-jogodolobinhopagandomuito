import Link from "next/link";
import styled from "styled-components";

const CampoNavEstilizado = styled.div<{ estilo?: string }>`
  font-size: 16px;
  cursor: pointer;
  padding: 12px 16px;
  color: white;
  text-align: center;
  border-radius: 5px;
  width: 100%;
  max-width: 150px;
  box-sizing: border-box;
  transition: background-color 0.3s ease, transform 0.3s ease;

  ${({ estilo }) =>
    estilo === "areaJogador" &&
    `
      background-color: rgba(255, 255, 255, 0.2);
    `}

  ${({ estilo }) =>
    estilo === "sair" &&
    `
      background-color: #dc2626;

      &:hover {
        background-color: #a31d1d;
      }
    `}

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  &:focus {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
    padding: 10px 20px;
    max-width: none;
  }
`;

interface CampoNavProps {
  texto: string;
  link: string;
  estilo?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function CampoNav({
  texto,
  link,
  estilo,
  onClick,
}: CampoNavProps): JSX.Element {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      event.preventDefault();
      onClick(event);
    }
  };

  return (
    <Link href={link} passHref>
      <CampoNavEstilizado estilo={estilo} onClick={handleClick}>
        {texto}
      </CampoNavEstilizado>
    </Link>
  );
}
