import { motion } from "framer-motion";
import styled from "styled-components";
import { Hexagon } from "@/components/hexagon";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.black};
  padding: 6.25rem 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 48rem) {
    padding: 4rem 1.25rem;
  }
`;

export const Inner = styled.div`
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: ${({ theme }) => theme.gaps["8xl"]};
  align-items: center;

  @media (max-width: 64rem) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.gaps["7xl"]};
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.gaps["3xl"]};
`;

export const Lead = styled.h2`
  font-size: clamp(
    ${({ theme }) => theme.fontSizes.displaySm},
    3.8vw,
    ${({ theme }) => theme.fontSizes.sectionMax}
  );
  font-weight: ${({ theme }) => theme.fontWeights.black};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: ${({ theme }) => theme.letterSpacings.tight};
  text-wrap: balance;
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
`;

export const Copy = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.85;
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps["2xl"]};
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

export const VisualColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps["5xl"]};
  width: 100%;
`;

export const TabsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.md};
  background: ${({ theme }) => theme.colors.white05};
  padding: 0.25rem;
  border-radius: ${({ theme }) => theme.radii.control};
  width: fit-content;
  border: 1px solid ${({ theme }) => theme.colors.white10};
`;

export const TabButton = styled.button<{ $active: boolean }>`
  background: ${({ $active, theme }) =>
    $active ? theme.colors.yellow : "transparent"};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.black : theme.colors.white};
  border: 0;
  padding: 0.5rem 1.125rem;
  border-radius: ${({ theme }) => theme.radii.control};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.uppercase};
  text-transform: uppercase;
  cursor: pointer;
  transition: all ${({ theme }) => theme.motion.base};

  &:hover {
    color: ${({ $active, theme }) =>
      $active ? theme.colors.black : theme.colors.yellow};
  }
`;

export const ProgressBarsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps["3xl"]};
  width: 100%;
  padding: 0.5rem 0;
`;

export const Hive = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0;
`;

export const Row = styled.div<{ $offset: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.gaps.none};
  margin-top: -1.5rem;
  padding-left: 0;

  &:first-child {
    margin-top: 0;
  }

  @media (max-width: 48rem) {
    margin-top: -1.125rem;
  }
`;

export const TechnologyItem = styled(motion.div)`
  position: relative;
  z-index: 0;
  width: 6rem;
  height: 6.75rem;
  cursor: pointer;

  &:active {
    -webkit-tap-highlight-color: transparent;
  }

  &:hover,
  &:focus,
  &:focus-visible {
    z-index: 10;
  }

  & > span {
    position: absolute;
    left: 50%;
    bottom: calc(100% - 0.375rem);
    transform: translate(-50%, 0.25rem);
    padding: 0.375rem 0.75rem;
    border-radius: ${({ theme }) => theme.radii.xs};
    background: ${({ theme }) => theme.colors.inkDeep};
    color: ${({ theme }) => theme.colors.yellow};
    border: 1px solid ${({ theme }) => theme.colors.yellow30};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition:
      opacity 180ms ease-out,
      transform 180ms ease-out;
    box-shadow: 0 0.25rem 0.75rem ${({ theme }) => theme.colors.black40};
  }

  &:hover > span,
  &:focus > span,
  &:focus-visible > span {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  @media (max-width: 48rem) {
    width: min(5.25rem, calc(20vw - 0.375rem));
    height: min(5.875rem, calc(22.4vw - 0.4375rem));

    & > span {
      font-size: ${({ theme }) => theme.fontSizes.xs};
    }
  }
`;

export const TechnologyHexagon = styled(Hexagon)`
  @media (max-width: 48rem) {
    width: min(5.25rem, calc(20vw - 0.375rem));
    height: min(5.875rem, calc(22.4vw - 0.4375rem));
  }
`;

export const Tooltip = styled.span``;

export const Icon = styled.img`
  width: 2.75rem;
  height: 2.75rem;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radii.circle};
  background: ${({ theme }) => theme.colors.black};
  object-fit: contain;

  @media (max-width: 48rem) {
    width: 2.125rem;
    height: 2.125rem;
    padding: 0.375rem;
  }
`;

export const Caption = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
`;
