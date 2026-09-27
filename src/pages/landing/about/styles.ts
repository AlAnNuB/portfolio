import { motion } from "framer-motion";
import styled from "styled-components";
import { Hexagon } from "@/components/hexagon";

export const Section = styled.section`
  background: ${({ theme }) => theme.black};
  padding: 100px 32px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 64px 20px;
  }
`;

export const Inner = styled.div`
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 64px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const Lead = styled.h2`
  font-size: clamp(26px, 3.8vw, 44px);
  font-weight: 900;
  line-height: 1.18;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  letter-spacing: -0.01em;
  text-wrap: balance;
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.yellow};
`;

export const Copy = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.7;
  color: ${({ theme }) => theme.white};
  opacity: 0.85;
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

export const VisualColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
`;

export const TabsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  padding: 4px;
  border-radius: 999px;
  width: fit-content;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const TabButton = styled.button<{ $active: boolean }>`
  background: ${({ $active, theme }) =>
    $active ? theme.yellow : "transparent"};
  color: ${({ $active, theme }) => ($active ? theme.black : theme.white)};
  border: 0;
  padding: 8px 18px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 200ms ease;

  &:hover {
    color: ${({ $active, theme }) => ($active ? theme.black : theme.yellow)};
  }
`;

export const ProgressBarsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 8px 0;
`;

export const Hive = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 12px 0;
`;

export const Row = styled.div<{ $offset: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 0;
  margin-top: -24px;
  padding-left: 0;

  &:first-child {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    margin-top: -18px;
  }
`;

export const TechnologyItem = styled(motion.div)`
  position: relative;
  z-index: 0;
  width: 96px;
  height: 108px;
  cursor: pointer;

  &:hover,
  &:focus,
  &:focus-visible {
    z-index: 10;
  }

  & > span {
    position: absolute;
    left: 50%;
    bottom: calc(100% - 6px);
    transform: translate(-50%, 4px);
    padding: 6px 12px;
    border-radius: ${({ theme }) => theme.radiusXs};
    background: #111016;
    color: ${({ theme }) => theme.yellow};
    border: 1px solid #fcdb744d;
    font-size: 11px;
    font-weight: 700;
    line-height: 1;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition:
      opacity 180ms ease-out,
      transform 180ms ease-out;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }

  &:hover > span,
  &:focus > span,
  &:focus-visible > span {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  @media (max-width: 768px) {
    width: min(84px, calc(20vw - 6px));
    height: min(94px, calc(22.4vw - 7px));

    & > span {
      font-size: 10px;
    }
  }
`;

export const TechnologyHexagon = styled(Hexagon)`
  @media (max-width: 768px) {
    width: min(84px, calc(20vw - 6px));
    height: min(94px, calc(22.4vw - 7px));
  }
`;

export const Tooltip = styled.span``;

export const Icon = styled.img`
  width: 44px;
  height: 44px;
  padding: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.black};
  object-fit: contain;

  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
    padding: 6px;
  }
`;

export const Caption = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
`;
