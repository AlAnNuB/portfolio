import { FramerMotionContainer } from "@/components/FramerMotionContainer";
import { Title } from "@/components/title";
import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { ElementType, useEffect } from "react";
import {
	ContactGrid,
	ContactItem,
	Content,
	IconWrapper,
	Label,
	Value,
} from "./styles";

type ContactInfoProps = {
	icon: ElementType;
	label: string;
	value: string;
	href?: string;
	target?: string;
};

export const Contact = () => {
	useEffect(() => {
		document.title = "Contato - Alan Miranda";
	}, []);

	const contactInfo: ContactInfoProps[] = [
		{
			icon: LinkedinLogo,
			label: "Linkedin",
			value: "Alan Miranda",
			href: "https://www.linkedin.com/in/alanmirandasilva/",
			target: "_blank",
		},
		{
			icon: Envelope,
			label: "E-mail",
			value: "alannub6@gmail.com",
			href: "mailto:alannub6@gmail.com",
		},
		{
			icon: GithubLogo,
			label: "GitHub",
			value: "@AlAnNuB",
			href: "https://github.com/AlAnNuB",
			target: "_blank",
		},
	];

	return (
		<FramerMotionContainer>
			<Content>
				<Title text="Contato" />
				<ContactGrid>
					{contactInfo.map(({ icon: Icon, label, value, href, target }) => (
						<ContactItem key={label} href={href} target={target}>
							<IconWrapper>
								<Icon weight="regular" />
							</IconWrapper>
							<Label>{label}</Label>
							<Value>{value}</Value>
						</ContactItem>
					))}
				</ContactGrid>
			</Content>
		</FramerMotionContainer>
	);
};
