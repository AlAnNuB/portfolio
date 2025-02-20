import { IconProps } from "@phosphor-icons/react";
import { ComponentType } from "react";

export interface SidebarButtonProps {
	id: number;
	title: string;
	icon: ComponentType<IconProps>;
	path: string;
}
