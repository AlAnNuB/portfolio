import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
	color: "#1a1a1a",
  backgroundDetail: "#dbead3", 
	backgroundCardAbility: "#dff5e1",
  primaryColor: "#32CD32", 
  backgroundSidebar: "rgba(255, 255, 255, 0.6)", 
  borderSidebar: "#cccccc", 
  buttonPrimary: "#4CAF50", 
  bodyBackground: "linear-gradient(to bottom, #ffffff, #f0f0f0)", 
};

export const darkTheme: DefaultTheme = {
	color: "#ffffff",
	backgroundDetail: "#4B6F44",
	backgroundCardAbility: "#081603",
	primaryColor: "#7FFF00",
	backgroundSidebar: "rgba(33, 34, 39, 0.4)",
	borderSidebar: "#2E2F34",
	buttonPrimary: "#3B7A57",
	bodyBackground: "linear-gradient(to bottom, #0f0f0f, #1a1a1a);",
};
