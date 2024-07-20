import { Link, useLocation } from "react-router-dom"
import { LinkContent, Navigation } from "./styles"
import { SidebarButtonProps } from "../../types/ISidebarButtonProps";


interface NavbarProps {
  sections: SidebarButtonProps[]
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
      </Navigation>
  )
}