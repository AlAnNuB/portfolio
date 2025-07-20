import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string;
    color: string;
    backgroundTextContent: string;
    primaryColor: string;
    backgroundDetail: string;
    backgroundSidebar: string;
    buttonPrimary: string;
    bodyBackground: string;
  }
} 