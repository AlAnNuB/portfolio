import { Link, useLocation } from "react-router-dom";
import { SidebarButtonProps } from "../../types/ISidebarButtonProps";
import { LinkContent, Navigation, ScrollIndicator } from "./styles";

interface NavbarProps {
	sections: SidebarButtonProps[];
}

export const Navbar = ({ sections }: NavbarProps) => {
	const activePath = useLocation().pathname;

	return (
		<Navigation>
			{sections.map(({ id, icon: Icon, path, title }: SidebarButtonProps) => (
				<Link key={id} to={path}>
					<LinkContent $isActive={activePath === path}>
						<Icon />
						<span>{title}</span>
					</LinkContent>
				</Link>
			))}

			<ScrollIndicator />
		</Navigation>
	);
};
