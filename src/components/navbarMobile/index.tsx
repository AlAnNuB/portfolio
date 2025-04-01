import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarButtonProps } from "../../types/ISidebarButtonProps";
import {
	CloseButton,
	LinkContent,
	Logo,
	MenuButton,
	MenuPanel,
	NavLinks,
	Navigation,
} from "./styles";

interface NavbarMobileProps {
	sections: SidebarButtonProps[];
}

export const NavbarMobile = ({ sections }: NavbarMobileProps) => {
	const activePath = useLocation().pathname;
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Navigation>
				<Link to="/">
					<Logo>Alan Miranda</Logo>
				</Link>
				<MenuButton onClick={toggleMenu}>
					{isOpen ? (
						<X size={24} weight="bold" />
					) : (
						<List size={24} weight="bold" />
					)}
				</MenuButton>
			</Navigation>

			<MenuPanel $isOpen={isOpen}>
				<Navigation>
					<Logo>Alan Miranda</Logo>
					<CloseButton onClick={toggleMenu}>
						<X size={24} weight="bold" />
					</CloseButton>
				</Navigation>
				<NavLinks>
					{sections.map(({ id, path, title }: SidebarButtonProps) => (
						<Link key={id} to={path} onClick={toggleMenu}>
							<LinkContent $isActive={activePath === path}>
								<span>{title}</span>
							</LinkContent>
						</Link>
					))}
				</NavLinks>
			</MenuPanel>
		</>
	);
};
