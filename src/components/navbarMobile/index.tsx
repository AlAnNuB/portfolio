import { ListIcon, MoonIcon, SunIcon, XIcon } from "@phosphor-icons/react";
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
import { useThemeContext } from "@/context/themeContext";

interface NavbarMobileProps {
	sections: SidebarButtonProps[];
}

export const NavbarMobile = ({ sections }: NavbarMobileProps) => {
	const activePath = useLocation().pathname;
	const [isOpen, setIsOpen] = useState(false);
	const { toggleTheme, currentTheme } = useThemeContext();

	const handleToggleTheme = () => {
		toggleTheme();
	};

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
						<XIcon size={24} weight="bold" />
					) : (
						<ListIcon size={24} weight="bold" />
					)}
				</MenuButton>
			</Navigation>

			<MenuPanel $isOpen={isOpen}>
				<Navigation>
					<Logo>Alan Miranda</Logo>
					<CloseButton onClick={toggleMenu}>
						<XIcon size={24} weight="bold" />
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
					<LinkContent $isActive={false} onClick={handleToggleTheme}>
						{currentTheme === "darkTheme" ? <SunIcon /> : <MoonIcon />}
					</LinkContent>
				</NavLinks>
			</MenuPanel>
		</>
	);
};
