import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    white: string;
    black: string;
    yellow: string;
    purple: string;
    color: string;
    primaryColor: string;
    selectionColor: string;
    radiusXs: string;
    radiusSm: string;
    radiusMd: string;
  }
}
