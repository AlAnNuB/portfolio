import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.yellow};
  padding: ${({ theme }) => `${theme.spacing["7xl"]} ${theme.spacing["3xl"]}`};
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => `${theme.spacing["6xl"]} ${theme.spacing.xl}`};
  }
`;

export const Inner = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.gaps["2xl"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.gaps.xl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.gaps.lg};
  }
`;

export const Card = styled(motion.a)`
  display: flex;
  flex-direction: column;
  min-height: ${({ theme }) => theme.sizes.cardMinHeight};
  border-radius: ${({ theme }) => theme.radii.card};
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  overflow: hidden;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.white08};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition:
    transform 280ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 280ms cubic-bezier(0.16, 1, 0.3, 1),
    border-color ${({ theme }) => theme.motion.slow};

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    border-color: ${({ theme }) => theme.colors.yellow40};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const CardCover = styled.div<{ $gradientIndex: number }>`
  height: ${({ theme }) => theme.sizes.coverHeight};
  width: 100%;
  position: relative;
  overflow: hidden;
  background: ${({ $gradientIndex, theme }) => {
    const gradients = Object.values(theme.gradients);
    return gradients[$gradientIndex % gradients.length];
  }};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.15;
    background-image: radial-gradient(
      ${({ theme }) => theme.colors.yellow80} 1px,
      ${({ theme }) => theme.colors.transparent} 1px
    );
    background-size: 1rem 1rem;
    transition: transform 400ms ease;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: ${({ theme }) => theme.spacing["2xl"]};
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.colors.black},
      transparent
    );
  }

  ${Card}:hover &::before {
    transform: scale(1.1);
  }
`;

export const CoverBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  width: ${({ theme }) => theme.sizes.badge};
  height: ${({ theme }) => theme.sizes.badge};
  border-radius: ${({ theme }) => theme.radii.circle};
  background: ${({ theme }) => theme.colors.black70};
  backdrop-filter: blur(0.5rem);
  border: 1px solid ${({ theme }) => theme.colors.white15};
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.yellow};
  transition:
    transform ${({ theme }) => theme.motion.slow},
    background-color 240ms ease;

  ${Card}:hover &,
  ${Card}:focus-visible & {
    transform: translate(0.125rem, -0.125rem) scale(1.08);
    background: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const CoverIcon = styled.svg`
  display: block;
  transition: transform ${({ theme }) => theme.motion.slow};
  transform-box: fill-box;
  transform-origin: center;

  ${Card}:hover &,
  ${Card}:focus-visible & {
    transform: rotate(45deg);
  }
`;

export const CardBody = styled.div`
  padding: 0 ${({ theme }) => theme.spacing["2xl"]}
    ${({ theme }) => theme.spacing["2xl"]};
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${({ theme }) => theme.gaps.lg};
  justify-content: flex-end;
`;

export const Tag = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.eyebrow};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.yellow};
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.xs};

  &::before {
    content: "";
    width: ${({ theme }) => theme.spacing["2xs"]};
    height: ${({ theme }) => theme.spacing["2xs"]};
    border-radius: ${({ theme }) => theme.radii.circle};
    background: ${({ theme }) => theme.colors.yellow};
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacings.tight};
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.lineHeights.body};
  transition: color ${({ theme }) => theme.motion.base};

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const Meta = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: ${({ theme }) => theme.lineHeights.body};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.78;
`;
