import { motion } from "framer-motion";
import styled from "styled-components";

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
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
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

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
`;

export const ListItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px 20px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition:
    transform 200ms ease,
    background-color 200ms ease,
    border-color 200ms ease;

  &:hover {
    transform: translateX(6px);
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(252, 219, 116, 0.3);
  }

  strong {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.yellow};
  }

  span {
    font-size: 14px;
    line-height: 1.6;
    color: ${({ theme }) => theme.white};
    opacity: 0.84;
    font-weight: 400;
  }
`;

export const HoneycombStats = styled.div`
  position: relative;
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const StatsTopRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const StatsBottomRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -24px;
  width: 100%;

  @media (max-width: 480px) {
    margin-top: -16px;
  }
`;

export const HexCard = styled(motion.div)`
  position: relative;
  width: 160px;
  height: 184px;
  display: grid;
  place-items: center;
  cursor: default;

  @media (max-width: 480px) {
    width: 136px;
    height: 156px;
  }

  svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.35));
    transition: transform 260ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover svg {
    transform: scale(1.04);
  }
`;

export const HexContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StatValue = styled.p`
  font-size: clamp(32px, 3.5vw, 42px);
  font-weight: 900;
  color: ${({ theme }) => theme.black};
  font-variant-numeric: tabular-nums;
  line-height: 1;
`;

export const StatLabel = styled.p`
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.black};
  max-width: 110px;
  margin: 6px auto 0;
  line-height: 1.35;
`;
