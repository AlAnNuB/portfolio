import { Container, Letter, Phrases } from "./styles";

interface TitleProps {
	text: string;
}

export const Title = ({ text }: TitleProps) => {
	const textSplited = text.split(" ");

	return (
		<Container aria-label={text}>
			{textSplited.map((word) => (
				<Phrases key={word}>
					{word.split("").map((letter, index) => (
						<Letter key={index}>{letter}</Letter>
					))}
				</Phrases>
			))}
		</Container>
	);
};
