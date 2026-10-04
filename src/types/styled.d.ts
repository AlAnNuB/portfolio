import type { Theme } from "@/styles/themes";

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
