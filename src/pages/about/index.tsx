import MyPhoto from "@/assets/myPhoto.png";
import { FramerMotionContainer } from "@/components/FramerMotionContainer";
import { Title } from "@/components/title";
import { useEffect } from "react";
import {
	Container,
	Description,
	ImageBox,
	SubTitle,
	TextContent,
} from "./styles";

export const About = () => {
	useEffect(() => {
		document.title = "Sobre - Alan Miranda";
	}, []);

	return (
		<FramerMotionContainer>
			<Container>
				<TextContent>
					<Title text="Olá sou Alan Miranda" />
					<SubTitle>Desenvolvedor front-end com React</SubTitle>
					<Description>
						Sou apaixonado por desenvolver interfaces dinâmicas e proporcionar
						experiências imersivas aos usuários. Atuo atualmente no ecossistema
						JavaScript, focado principalmente em React. Sou comprometido,
						entusiasmado e sempre em busca de melhorias e inovações em cada
						projeto que realizo.
					</Description>
				</TextContent>
				<ImageBox>
					<img src={MyPhoto} alt="Alan" />
				</ImageBox>
			</Container>
		</FramerMotionContainer>
	);
};
