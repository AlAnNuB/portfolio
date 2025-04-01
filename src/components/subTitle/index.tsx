import { ComponentProps } from "react";
import { Container } from "./styles";

export interface SubTitleProps extends ComponentProps<typeof Container> {
	text: string;
}

export const SubTitle = ({ text, ...rest }: SubTitleProps) => {
	return <Container {...rest}>{text}</Container>;
};
