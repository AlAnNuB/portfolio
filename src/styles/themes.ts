export const colors = {
  white: "#FAFAFA",
  black: "#24222D",
  ink: "#1B1924",
  inkDeep: "#111016",
  inkSoft: "#2E2C38",
  yellow: "#FCDB74",
  yellowBright: "#FFE38F",
  yellowMuted: "#BEA34C",
  purple: "#584B8C",
  green: "#10B981",
  surface: "#18171F",
  white03: "#FFFFFF08",
  white05: "#FAFAFA0D",
  white06: "#FAFAFA0F",
  white08: "#FAFAFA14",
  white10: "#FAFAFA1A",
  white12: "#FAFAFA1F",
  white15: "#FFFFFF26",
  white18: "#FAFAFA2E",
  white25: "#FAFAFA40",
  white45: "#FFFFFF73",
  black06: "#24222D0F",
  black12: "#24222D1F",
  black15: "#24222D26",
  black16: "#24222D29",
  black20: "#24222D33",
  black25: "#24222D40",
  black28: "#24222D47",
  black32: "#24222D52",
  black45: "#24222D73",
  black70: "#24222DB3",
  black72: "#24222DB8",
  black35: "#00000059",
  black40: "#00000066",
  white80: "#FFFFFFCC",
  yellow05: "#FCDB740D",
  yellow08: "#FCDB7414",
  yellow25: "#FCDB7440",
  yellow30: "#FCDB744D",
  yellow38: "#FCDB7461",
  yellow40: "#FCDB7466",
  yellow80: "#FCDB74CC",
  yellow92: "#FCDB74EB",
  transparent: "transparent",
} as const;

export const radii = {
  xs: "6px",
  hairline: "2px",
  compact: "4px",
  sm: "16px",
  panel: "12px",
  md: "100px",
  card: "20px",
  control: "999px",
  circle: "50%",
  scrollbar: "4px",
} as const;

export const fontSizes = {
  xs: "0.625rem",
  sm: "0.6875rem",
  md: "0.75rem",
  base: "0.8125rem",
  baseHalf: "0.84375rem",
  lg: "0.875rem",
  xl: "0.9375rem",
  "2xl": "1.1875rem",
  body: "1rem",
  heading: "1.25rem",
  buttonCompact: "0.688rem",
  heroWatermarkMin: "1.875rem",
  heroWatermarkMax: "5.75rem",
  sectionMin: "1.625rem",
  sectionMax: "2.75rem",
  statMin: "2rem",
  statMax: "2.625rem",
  roleMin: "1rem",
  roleMax: "1.375rem",
  nameMin: "3rem",
  nameMax: "5.25rem",
  nameTabletMin: "2.375rem",
  nameTabletMax: "3.375rem",
  mobileNameMin: "2.25rem",
  mobileNameMax: "3.25rem",
  modalMin: "1.75rem",
  modalMax: "3rem",
  displaySm: "1.625rem",
  display: "2rem",
  displayLg: "3rem",
  displayXl: "4rem",
} as const;

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

export const spacing = {
  none: "0",
  xs: "0.25rem",
  "2xs": "0.375rem",
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "2rem",
  "4xl": "2.5rem",
  "5xl": "3rem",
  "6xl": "4rem",
  "7xl": "6.25rem",
} as const;

export const gaps = {
  none: spacing.none,
  xs: spacing.xs,
  sm: "0.375rem",
  md: spacing.sm,
  lg: spacing.md,
  xl: spacing.lg,
  "2xl": spacing.xl,
  "3xl": spacing["2xl"],
  "4xl": spacing["3xl"],
  "5xl": spacing["4xl"],
  "6xl": spacing["5xl"],
  "7xl": spacing["6xl"],
  "8xl": spacing["7xl"],
} as const;

export const sizes = {
  iconXs: "1.5rem",
  iconSm: "2rem",
  iconMd: "2.25rem",
  iconLg: "2.75rem",
  buttonIcon: "2.063rem",
  header: "3.75rem",
  content: "77.5rem",
  contentWide: "82rem",
  modal: "32.5rem",
  scrollbar: "0.5rem",
  cardMinHeight: "17.5rem",
  coverHeight: "7.5rem",
  badge: "2rem",
} as const;

export const breakpoints = {
  mobileSmall: "26.25rem",
  mobile: "48rem",
  tablet: "63.9375rem",
  desktop: "64rem",
  wide: "68.75rem",
  nav: "56.25rem",
} as const;

export const shadows = {
  header: `0 0.25rem 1.25rem ${colors.black12}`,
  brand: `0 0.25rem 0.75rem ${colors.black25}`,
  button: `0 0.25rem 1rem ${colors.black20}`,
  buttonHover: `0 0.5rem 1.5rem ${colors.black32}`,
  tooltip: `0 0.25rem 0.75rem ${colors.black45}`,
  card: `0 0.5rem 1.5rem ${colors.black15}`,
  cardHover: `0 1.25rem 2.25rem ${colors.black28}`,
  cardLarge: `0 0.625rem 1.875rem ${colors.black16}`,
  cardLargeHover: `0 1.125rem 2.5rem ${colors.black25}`,
  photo: `0 1rem 2.5rem ${colors.black40}`,
  icon: `0 0 0.625rem ${colors.green}`,
} as const;

export const gradients = {
  project01: `linear-gradient(135deg, #1E1D27 0%, #2E2C3B 50%, #1A1923 100%)`,
  project02: `linear-gradient(135deg, #262432 0%, #3A3749 50%, #1E1D27 100%)`,
  project03: `linear-gradient(135deg, #1F202B 0%, #2D2E3D 50%, #171821 100%)`,
  project04: `linear-gradient(135deg, #2A2838 0%, #3E3A52 50%, #1D1C26 100%)`,
  project05: `linear-gradient(135deg, #22212D 0%, #333142 50%, #191822 100%)`,
  project06: `linear-gradient(135deg, #282635 0%, #3B384D 50%, #1B1A24 100%)`,
} as const;

export const motion = {
  fast: "150ms ease-out",
  base: "200ms ease",
  slow: "300ms ease",
} as const;

export const lineHeights = {
  tight: 0.9,
  snug: 0.98,
  normal: 1,
  heading: 1.18,
  title: 1.25,
  role: 1.35,
  compact: 1.45,
  body: 1.6,
  prose: 1.65,
  relaxed: 1.7,
} as const;

export const letterSpacings = {
  tight: "-0.01em",
  normal: "0",
  subtle: "0.02em",
  display: "0.04em",
  wide: "0.08em",
  uppercase: "0.12em",
  label: "0.14em",
  nav: "0.16em",
  eyebrow: "0.18em",
  section: "0.2em",
} as const;

export type Theme = {
  colors: typeof colors;
  radii: typeof radii;
  fontSizes: typeof fontSizes;
  fontWeights: typeof fontWeights;
  spacing: typeof spacing;
  gaps: typeof gaps;
  sizes: typeof sizes;
  breakpoints: typeof breakpoints;
  shadows: typeof shadows;
  gradients: typeof gradients;
  motion: typeof motion;
  lineHeights: typeof lineHeights;
  letterSpacings: typeof letterSpacings;
  fontFamily: string;
  maxWidth: string;
};

export const theme = {
  colors,
  radii,
  fontSizes,
  fontWeights,
  spacing,
  gaps,
  sizes,
  breakpoints,
  shadows,
  gradients,
  motion,
  lineHeights,
  letterSpacings,
  fontFamily: '"Montserrat", sans-serif',
  maxWidth: sizes.content,
} satisfies Theme;

export const themes = {
  light: theme,
} as const;
