import { ComponentProps } from "react";
import { Container, Letter, Phrases } from "./styles";

export interface TitleProps extends ComponentProps<typeof Container> {
	text: string;
	theme?: "default" | "primary";
	as?: string;
}

export const Title = ({ text, theme = "default", ...rest }: TitleProps) => {
	const textSplited = text.split(" ");

	return (
		<Container aria-label={text} {...rest}>
			{textSplited.map((word) => (
				<Phrases key={word}>
					{word.split("").map((letter, index) => (
						<Letter key={index} $themeProp={theme}>
							{letter}
						</Letter>
					))}
				</Phrases>
			))}
		</Container>
	);
};
