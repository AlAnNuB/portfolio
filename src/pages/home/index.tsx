import Programming from "@/assets/programming.svg";
import { FramerMotionContainer } from "@/components/FramerMotionContainer";
import { LinkButton } from "@/components/LinkButton";
import { Title } from "@/components/title";
import { useEffect } from "react";
import {
	Content,
	Greeting,
	ImageContainer,
	ImageProgramming,
	SubTitle,
	TextContent,
	TitleContainer,
} from "./styles";

export const Home = () => {
	useEffect(() => {
		document.title = "Home - Alan Miranda";
	}, []);

	return (
		<FramerMotionContainer>
			<Content>
				<TextContent>
					<Greeting>
						Oi! Eu sou <span>Alan Miranda</span>
					</Greeting>
					<Greeting>Trabalho como</Greeting>
					<TitleContainer>
						<Title text="Desenvolvedor" />
						<Title as="h2" text="Full Stack" theme="primary" />
					</TitleContainer>
					<SubTitle>Com mais de 2 anos no mercado</SubTitle>
					<LinkButton
						href="https://www.linkedin.com/in/alanmirandasilva/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Ver o LinkedIn
					</LinkButton>
				</TextContent>
				<ImageContainer>
					<ImageProgramming
						src={Programming}
						alt="Ilustração de um desenvolvedor trabalhando no computador"
					/>
				</ImageContainer>
			</Content>
		</FramerMotionContainer>
	);
};
