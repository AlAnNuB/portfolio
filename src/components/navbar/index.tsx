import { Link, useLocation } from "react-router-dom";
import { SidebarButtonProps } from "../../types/ISidebarButtonProps";
import { LinkContent, Logo, NavLinks, Navigation } from "./styles";

interface NavbarProps {
	sections: SidebarButtonProps[];
}

export const Navbar = ({ sections }: NavbarProps) => {
	const activePath = useLocation().pathname;

	return (
		<Navigation>
			<Link to="/">
				<Logo>Alan Miranda</Logo>
			</Link>
			<NavLinks>
				{sections.map(({ id, path, title }: SidebarButtonProps) => (
					<Link key={id} to={path}>
						<LinkContent $isActive={activePath === path}>
							<span>{title}</span>
						</LinkContent>
					</Link>
				))}
			</NavLinks>
		</Navigation>
	);
};
