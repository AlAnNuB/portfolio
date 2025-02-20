import cssImage from "@/assets/technologies/css-3.svg";
import dockerImage from "@/assets/technologies/docker-4.svg";
import gitImage from "@/assets/technologies/git-icon.svg";
import gitHubImage from "@/assets/technologies/github-icon-1.svg";
import htmlImage from "@/assets/technologies/html-1.svg";
import javaScriptImage from "@/assets/technologies/javascript.svg";
import nextImage from "@/assets/technologies/next-js.svg";
import nodeImage from "@/assets/technologies/nodejs-icon.svg";
import postgreSqlImage from "@/assets/technologies/postgresql.svg";
import reactImage from "@/assets/technologies/react-2.svg";
import stitchesImage from "@/assets/technologies/stitches.svg";
import styledComponentsImage from "@/assets/technologies/styled-components-1.svg";
import typescriptImage from "@/assets/technologies/typescript.svg";
import vercelImage from "@/assets/technologies/vercel.svg";

export interface ITechnologyProps {
	name: string;
	icon: string;
}

export const technologies: ITechnologyProps[] = [
	{ name: "JavaScript", icon: javaScriptImage },
	{ name: "TypeScript", icon: typescriptImage },
	{ name: "React", icon: reactImage },
	{ name: "Styled Components", icon: styledComponentsImage },
	{ name: "Stitches", icon: stitchesImage },
	{ name: "HTML", icon: htmlImage },
	{ name: "CSS", icon: cssImage },
	{ name: "Next", icon: nextImage },
	{ name: "Node", icon: nodeImage },
	{ name: "Docker", icon: dockerImage },
	{ name: "PostgreSQL", icon: postgreSqlImage },
	{ name: "Git", icon: gitImage },
	{ name: "GitHub", icon: gitHubImage },
	{ name: "Vercel", icon: vercelImage },
];
