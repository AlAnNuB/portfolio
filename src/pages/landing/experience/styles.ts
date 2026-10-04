import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.yellow};
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
`;

export const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.gaps["4xl"]};
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 56.25rem) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.gaps["3xl"]};
  }
`;

export const Card = styled(motion.article)`
  padding: 2.25rem 2rem;
  border-radius: ${({ theme }) => theme.radii.card};
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps["5xl"]};
  border: 1px solid ${({ theme }) => theme.colors.white08};
  box-shadow: 0 0.625rem 1.875rem ${({ theme }) => theme.colors.black16};
  position: relative;
  overflow: hidden;
  transition:
    transform 240ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 240ms ease,
    border-color 240ms ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 12.5rem;
    height: 12.5rem;
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.colors.yellow05} 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 1.125rem 2.5rem ${({ theme }) => theme.colors.black25};
    border-color: ${({ theme }) => theme.colors.yellow30};
  }

  @media (max-width: 48rem) {
    padding: 1.75rem 1.25rem;
  }
`;

export const KindHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.lg};
  padding-bottom: 0.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white10};
`;

export const Kind = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.section};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.yellow};
`;

export const EntryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps["4xl"]};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0.4375rem;
    top: 0.875rem;
    bottom: 0.875rem;
    width: 1px;
    background: ${({ theme }) => theme.colors.yellow25};
  }
`;

export const Entry = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps["2xl"]};
  position: relative;
`;

export const Bullet = styled.div`
  width: 0.9375rem;
  height: 1.062rem;
  flex-shrink: 0;
  margin-top: 0.25rem;
  position: relative;
  z-index: 1;

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.colors.yellow};
    filter: drop-shadow(0 0 0.375rem ${({ theme }) => theme.colors.yellow40});
  }
`;

export const EntryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.sm};

  p {
    margin-top: 0.375rem;
    font-size: ${({ theme }) => theme.fontSizes.baseHalf};
    line-height: ${({ theme }) => theme.lineHeights.prose};
    opacity: 0.82;
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacings.tight};
  line-height: ${({ theme }) => theme.lineHeights.title};
  color: ${({ theme }) => theme.colors.white};
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.md};
  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.yellow};
  opacity: 0.9;
  letter-spacing: ${({ theme }) => theme.letterSpacings.subtle};
`;

export const Period = styled.span`
  background: ${({ theme }) => theme.colors.white08};
  padding: 0.125rem 0.5rem;
  border-radius: ${({ theme }) => theme.radii.card};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.white80};
`;
