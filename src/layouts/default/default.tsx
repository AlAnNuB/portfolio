import { Navbar } from "@/components/navbar";
import { NavbarMobile } from "@/components/navbarMobile";
import { SidebarButtonProps } from "@/types/ISidebarButtonProps";
import {
	AddressBook,
	House,
	IdentificationBadge,
	// ProjectorScreenChart,
	StackPlus,
} from "@phosphor-icons/react";
import { AnimatePresence } from "framer-motion";
import { AnimatedOutlet } from "../animatedOutlet";
import { Content } from "./styles";
import { useScrollChangePage } from "@/hooks/useScrollChangePage";

export const Default = () => {


	const sections: SidebarButtonProps[] = [
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
			title: "Habilidades",
			icon: StackPlus,
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
			icon: AddressBook,
			path: "/contact",
		},
	];

	useScrollChangePage(sections);

	return (
		<>
			<Navbar sections={sections} />
			<NavbarMobile sections={sections} />
			<Content>
				<AnimatePresence mode="wait" initial={true}>
					<AnimatedOutlet />
				</AnimatePresence>
			</Content>
		</>
	);
};
