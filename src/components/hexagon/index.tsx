import { ReactNode } from "react";
import styled from "styled-components";

const CLIP = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

const Face = styled.div<{ $size: number; $tone: "yellow" | "dark" | "white" }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => Math.round($size * 1.12)}px;
  clip-path: ${CLIP};
  border: 2px solid ${({ theme }) => theme.yellow};
  background: ${({ $tone, theme }) => {
    if ($tone === "yellow") return theme.yellow;
    if ($tone === "white") return theme.white;
    return theme.black;
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

export const Hexagon = ({
  size = 88,
  tone = "yellow",
  children,
  className,
}: HexagonProps) => {
  return (
    <Face $size={size} $tone={tone} className={className}>
      {children}
    </Face>
  );
};
