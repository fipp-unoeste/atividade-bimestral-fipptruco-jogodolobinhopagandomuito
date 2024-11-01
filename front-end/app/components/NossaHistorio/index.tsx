import styled from "styled-components";

const SectionEstilizado = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: justify;
  gap: 40px;
  padding: 50px 500px;
  width: 100%;

  h2 {
    font-size: 35px;
  }

  p {
    font-size: 18px;
  }

  @media (max-width: 1440px) {
    padding: 50px 300px;
  }

  @media (max-width: 1024px) {
    padding: 50px 100px;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
    gap: 20px;

    h2 {
      font-size: 28px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export default function NossaHistoria() {
  return (
    <SectionEstilizado>
      <h2>Nossa História</h2>

      <p>
        O FIPPTruco nasceu em 2024 com uma missão clara: trazer a tradicional
        experiência do truco para o ambiente digital, mantendo toda a diversão e
        competitividade que tornam esse jogo tão especial.
      </p>

      <p>
        Desenvolvido por estudantes da FIPP{" "}
        <strong>(Faculdade de Informática de Presidente Prudente)</strong>,
        nossa plataforma combina tecnologia de ponta com a preservação da
        autêntica cultura do truco paulista.
      </p>
    </SectionEstilizado>
  );
}
