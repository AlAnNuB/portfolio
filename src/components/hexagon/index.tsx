import { ReactNode } from "react";
import styled from "styled-components";

const CLIP = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

const Face = styled.div<{ $size: number; $tone: "yellow" | "dark" | "white" }>`
  width: ${({ $size }) => $size / 16}rem;
  height: ${({ $size }) => Math.round($size * 1.12) / 16}rem;
  clip-path: ${CLIP};
  border: 0.125rem solid ${({ theme }) => theme.colors.yellow};
  background: ${({ $tone, theme }) => {
    if ($tone === "yellow") return theme.colors.yellow;
    if ($tone === "white") return theme.colors.white;
    return theme.colors.black;
  }};
  display: grid;
  place-items: center;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
`;

type HexagonProps = {
  size?: number;
  tone?: "yellow" | "dark" | "white";
  children?: ReactNode;
  className?: string;
};

export const Hexagon = ({ size = 88, tone = "yellow", children, className }: HexagonProps) => {
  return (
    <Face $size={size} $tone={tone} className={className}>
      {children}
    </Face>
  );
};
