import {
  ProjectorScreenChart,
  IdentificationBadge,
  StackPlus,
  IconProps,
  AddressBook,
  House,
} from "@phosphor-icons/react";
import { Container, Content, LinkContent, Navigation } from "./styles";
import { ComponentType, useCallback, useEffect, useMemo } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

type SectionType = {
  id: number;
  title: string;
  icon: ComponentType<IconProps>;
  path: string;
};

export const Default = () => {
  const navigate = useNavigate();

  const activePath = useLocation().pathname;

  const sections: SectionType[] = useMemo(
    () => [
      {
        id: 1,
        title: "Inicio",
        icon: House,
        path: "/",
      },
      {
        id: 2,
        title: "Sobre",
        icon: IdentificationBadge,
        path: "/sobre",
      },
      {
        id: 3,
        title: "Tecnologias",
        icon: StackPlus,
        path: "/technologies",
      },
      {
        id: 4,
        title: "Projetos",
        icon: ProjectorScreenChart,
        path: "/projects",
      },
      {
        id: 5,
        title: "Contato",
        icon: AddressBook,
        path: "/contact",
      },
    ],
    [],
  );

  const pathIndex = sections
    .map((item) => item.path === activePath)
    .findIndex((item) => item);

  const listenScrollEvent = useCallback(
    (e: WheelEvent) => {
      if (e.deltaY > 0 && pathIndex >= 0 && pathIndex < sections.length - 1) {
        // scroll down
        navigate(sections[pathIndex + 1].path);
      }
      if (e.deltaY < 0 && pathIndex > 0 && pathIndex < sections.length) {
        //scroll up
        navigate(sections[pathIndex - 1].path);
      }
      return
    },
    [navigate, pathIndex, sections],
  );

  useEffect(() => {
    window.addEventListener("wheel", listenScrollEvent);

    return () => window.removeEventListener("wheel", listenScrollEvent);
  }, [listenScrollEvent]);

  return (
    <Container>
      <Navigation>
        {sections.map(({ id, icon: Icon, path, title }: SectionType) => (
          <Link key={id} to={path}>
            <LinkContent $isActive={activePath === path}>
              <Icon />
              <span>{title}</span>
            </LinkContent>
          </Link>
        ))}
      </Navigation>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};
