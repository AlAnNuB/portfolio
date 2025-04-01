import { FramerMotionContainer } from "@/components/FramerMotionContainer";
import { SubTitle } from "@/components/subTitle";
import { Title } from "@/components/title";
import { useEffect } from "react";
import { Content, TechnologiesGrid } from "./styles";
import { TechnologyCard } from "./technologieCard";
import { technologies } from "./tecnologiesList";

export const Technologies = () => {
	useEffect(() => {
		document.title = "Habilidades - Alan Miranda";
	}, []);

	return (
		<FramerMotionContainer>
			<Content>
				<Title text="Habilidades" />
				<SubTitle text="Veja minhas principais competências para transformar suas ideias em soluções" />
				<TechnologiesGrid>
					{technologies.map(({ name, icon }) => (
						<TechnologyCard key={name} icon={icon} name={name} />
					))}
				</TechnologiesGrid>
			</Content>
		</FramerMotionContainer>
	);
};
