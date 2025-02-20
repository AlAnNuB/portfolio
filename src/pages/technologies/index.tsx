import { FramerMotionContainer } from "@/components/FramerMotionContainer";
import { Title } from "@/components/title";
import {
	Content,
	Description,
	TechnologiesContainer,
	TextContent,
} from "./styles";

import { TechnologyCard } from "@/components/technologieCard";
import { useEffect } from "react";
import { technologies } from "./tecnologiesList";

export const Technologies = () => {
	useEffect(() => {
		document.title = "Tecnologias - Alan Miranda";
	});

	return (
		<FramerMotionContainer>
			<Content>
				<TextContent>
					<Title text="Tecnologias que trabalho" />
					<Description>
						Sou desenvolvedor front-end com experiência no ecossistema
						JavaScript, especialmente com React e TypeScript. Utilizo também
						styled-components e Storybook para criar interfaces de usuário
						dinâmicas e bem estruturadas, e faço o versionamento do código com
						Git. Além disso, tenho conhecimentos em Node.js, PostgreSQL e
						experiência em deploy com Vercel, entre outras tecnologias.
					</Description>
				</TextContent>
				<TechnologiesContainer>
					{technologies.map(({ name, icon }) => (
						<TechnologyCard key={name} name={name} icon={icon} />
					))}
				</TechnologiesContainer>
			</Content>
		</FramerMotionContainer>
	);
};
