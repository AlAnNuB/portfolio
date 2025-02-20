import { ITechnologyProps } from "@/pages/technologies/tecnologiesList";
import { Container } from "./styles";

export const TechnologyCard = ({ name, icon: Icon }: ITechnologyProps) => {
	return (
		<Container>
			<img src={Icon} alt={name} />
			<figcaption>{name}</figcaption>
		</Container>
	);
};
