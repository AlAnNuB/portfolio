import { motion } from "framer-motion";
import styled from "styled-components";

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
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
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

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps["2xl"]};
  margin-top: 0.5rem;
`;

export const ListItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.sm};
  padding: 1rem 1.25rem;
  border-radius: ${({ theme }) => theme.radii.panel};
  background: ${({ theme }) => theme.colors.white03};
  border: 1px solid ${({ theme }) => theme.colors.white06};
  transition:
    transform ${({ theme }) => theme.motion.base},
    background-color ${({ theme }) => theme.motion.base},
    border-color ${({ theme }) => theme.motion.base};

  &:hover {
    transform: translateX(0.375rem);
    background: ${({ theme }) => theme.colors.white06};
    border-color: ${({ theme }) => theme.colors.yellow30};
  }

  strong {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    letter-spacing: ${({ theme }) => theme.letterSpacings.label};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.yellow};
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: ${({ theme }) => theme.lineHeights.body};
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.84;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }
`;

export const HoneycombStats = styled.div`
  position: relative;
  width: 100%;
  max-width: 27.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.gaps["2xl"]};
`;

export const StatsTopRow = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.gaps["2xl"]};
  width: 100%;

  @media (max-width: 30rem) {
    gap: ${({ theme }) => theme.gaps.md};
  }
`;

export const StatsBottomRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -1.5rem;
  width: 100%;

  @media (max-width: 30rem) {
    margin-top: -1rem;
  }
`;

export const HexCard = styled(motion.div)`
  position: relative;
  width: 10rem;
  height: 11.5rem;
  display: grid;
  place-items: center;
  cursor: default;

  @media (max-width: 30rem) {
    width: 8.5rem;
    height: 9.75rem;
  }

  svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    filter: drop-shadow(
      0 0.75rem 1.5rem ${({ theme }) => theme.colors.black35}
    );
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
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StatValue = styled.p`
  font-size: clamp(
    ${({ theme }) => theme.fontSizes.statMin},
    3.5vw,
    ${({ theme }) => theme.fontSizes.statMax}
  );
  font-weight: ${({ theme }) => theme.fontWeights.black};
  color: ${({ theme }) => theme.colors.black};
  font-variant-numeric: tabular-nums;
  line-height: ${({ theme }) => theme.lineHeights.normal};
`;

export const StatLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.uppercase};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
  max-width: 6.875rem;
  margin: 0.375rem auto 0;
  line-height: ${({ theme }) => theme.lineHeights.role};
`;
