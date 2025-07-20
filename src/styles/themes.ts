import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
	fontFamily: "Source Sans 3, sans-serif",
	color: "#333333",
	backgroundTextContent: "#ffffff",
	primaryColor: "#4CAF50",
	backgroundDetail: "#4B6F44",
	backgroundSidebar: "rgba(255, 255, 255, 0.95)",
	buttonPrimary: "#3B7A57",
	bodyBackground: "linear-gradient(to bottom, #ffffff, #f0f0f0)",
};

export const darkTheme: DefaultTheme = {
	fontFamily: "Source Sans 3, sans-serif",
	color: "#ffffff",
	backgroundTextContent: "#333333",
	backgroundDetail: "#4B6F44",
	primaryColor: "#7FFF00",
	backgroundSidebar: "rgba(33, 34, 39, 0.4)",
	buttonPrimary: "#3B7A57",
	bodyBackground: "linear-gradient(to bottom, #0f0f0f, #1a1a1a);",
};
