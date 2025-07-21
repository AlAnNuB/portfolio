import { FramerMotionContainer } from "@/components/FramerMotionContainer";
import { LinkButton } from "@/components/LinkButton";
import { SubTitle } from "@/components/subTitle";
import { Title } from "@/components/title";
import { useEffect } from "react";
import { Container, Description, DescriptionBox } from "./styles";

export const About = () => {
  useEffect(() => {
    document.title = "Sobre - Alan Miranda";
  }, []);

  return (
    <FramerMotionContainer>
      <Container>
        <Title text="Quem sou eu" />
        <SubTitle text="Desenvolvedor Full Stack" />
        <DescriptionBox>
          <Description>
            Anteriormente, trabalhei no setor de restaurantes, mas sempre tive um forte interesse pela tecnologia. Com a pandemia, surgiu a oportunidade de participar do curso de Desenvolvedor Full
            Stack Júnior da Recode, uma experiência enriquecedora que ampliou meus conhecimentos em Java, Spring, JavaScript, React, Git, entre outros. Além disso, o curso fortaleceu minhas
            habilidades em colaboração em equipe, expressão de opiniões e gestão de conflitos.
          </Description>
          <Description>
            Essa transição de carreira me levou com sucesso ao Grupo GPS, onde acumulo mais de 2 anos de experiência como desenvolvedor front-end. Nessa função, tenho atualizado e desenvolvido novas
            funcionalidades em React com TypeScript, além de estilizar interfaces com Styled Components e Stitches, sempre seguindo rigorosamente os layouts propostos pela equipe de design no Figma.
          </Description>
        </DescriptionBox>
        <LinkButton href="/CV.pdf" target="_blank" rel="noopener noreferrer">
          Baixar currículo
        </LinkButton>
      </Container>
    </FramerMotionContainer>
  );
};
