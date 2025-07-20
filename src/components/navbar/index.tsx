import { Link, useLocation } from "react-router-dom";
import { SidebarButtonProps } from "../../types/ISidebarButtonProps";
import { LinkContent, Logo, NavLinks, Navigation } from "./styles";
import { SunIcon, MoonIcon } from "@phosphor-icons/react";
import { useThemeContext } from "@/context/themeContext";

interface NavbarProps {
	sections: SidebarButtonProps[];
}

export const Navbar = ({ sections }: NavbarProps) => {
	const activePath = useLocation().pathname;
	const { toggleTheme, currentTheme } = useThemeContext();

	const handleToggleTheme = () => {
		toggleTheme();
	};

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
				<LinkContent $isActive={false} onClick={handleToggleTheme}>
					{currentTheme === "darkTheme" ? <SunIcon /> : <MoonIcon />}
				</LinkContent>
			</NavLinks>
		</Navigation>
	);
};
