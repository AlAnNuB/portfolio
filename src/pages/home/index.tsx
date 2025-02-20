import Programming from "@/assets/programming.svg";
import { FramerMotionContainer } from "@/components/FramerMotionContainer";
import { Title } from "@/components/title";
import { useEffect } from "react";
import { Content, Description, ImageProgramming, TextContent } from "./styles";

export const Home = () => {
	useEffect(() => {
		document.title = "Home - Alan Miranda";
	}, []);
	return (
		<FramerMotionContainer>
			<Content>
				<TextContent>
					<Title text="Desenvolvedor Front-end" />
					<Description>
						Transformo ideias em interfaces interativas e dinâmicas usando
						React, criando experiências que encantam e simplificam.
					</Description>
				</TextContent>
				<ImageProgramming
					src={Programming}
					alt="Imagem de um rapaz sentado em uma cadeira de trabalho mexendo com o computador"
				/>
			</Content>
		</FramerMotionContainer>
	);
};
