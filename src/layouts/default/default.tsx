import { Navbar } from "@/components/navbar";
import { NavbarMobile } from "@/components/navbarMobile";
import { SidebarButtonProps } from "@/types/ISidebarButtonProps";
import {
  AddressBookIcon,
  HouseIcon,
  IdentificationBadgeIcon,
  // ProjectorScreenChart,
  StackPlusIcon,
} from "@phosphor-icons/react";
import { AnimatePresence } from "framer-motion";
import { AnimatedOutlet } from "../animatedOutlet";
import { Content, GreenBall } from "./styles";
import { useScrollChangePage } from "@/hooks/useScrollChangePage";

export const Default = () => {
  const sections: SidebarButtonProps[] = [
    {
      id: 1,
      title: "Inicio",
      icon: HouseIcon,
      path: "/",
    },
    {
      id: 2,
      title: "Sobre",
      icon: IdentificationBadgeIcon,
      path: "/sobre",
    },
    {
      id: 3,
      title: "Habilidades",
      icon: StackPlusIcon,
      path: "/technologies",
    },
    // {
    // 	id: 4,
    // 	title: "Projetos",
    // 	icon: ProjectorScreenChart,
    // 	path: "/projects",
    // },
    {
      id: 5,
      title: "Contato",
      icon: AddressBookIcon,
      path: "/contact",
    },
  ];

  useScrollChangePage(sections);

  return (
    <>
      <Navbar sections={sections} />
      <NavbarMobile sections={sections} />
      <Content>
        <GreenBall />
        <AnimatePresence mode="wait" initial={true}>
          <AnimatedOutlet />
        </AnimatePresence>
      </Content>
    </>
  );
};
