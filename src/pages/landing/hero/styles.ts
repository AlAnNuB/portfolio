import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  background: ${({ theme }) => theme.colors.yellow};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 6.25rem 2rem 3.5rem;

  @media (max-width: 48rem) {
    padding: 5.25rem 1.25rem 3rem;
    justify-content: center;
  }
`;

export const Watermark = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  top: 18%;
  margin-inline: auto;
  width: 100%;
  text-align: center;
  font-size: clamp(
    ${({ theme }) => theme.fontSizes.heroWatermarkMin},
    7.5vw,
    ${({ theme }) => theme.fontSizes.heroWatermarkMax}
  );
  font-weight: ${({ theme }) => theme.fontWeights.black};
  letter-spacing: ${({ theme }) => theme.letterSpacings.display};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.08;
  pointer-events: none;
  line-height: ${({ theme }) => theme.lineHeights.normal};
  white-space: nowrap;
  user-select: none;
  z-index: 0;

  @media (max-width: 48rem) {
    top: 12%;
    opacity: 0.06;
  }
`;

export const Cluster = styled.div`
  position: relative;
  z-index: 1;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  width: min(100%, 82rem);
  grid-template-columns: minmax(16.25rem, 1fr) 34rem minmax(16.25rem, 1fr);
  gap: ${({ theme }) => theme.gaps["6xl"]};
  align-items: end;

  @media (max-width: 68.75rem) and (min-width: 48.06rem) {
    grid-template-columns: minmax(0, 1fr) 25.5rem minmax(0, 1fr);
    gap: ${({ theme }) => theme.gaps["2xl"]};
  }

  @media (max-width: 48rem) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: ${({ theme }) => theme.gaps["4xl"]};
  }
`;

export const TextBlock = styled(motion.div)<{ $align?: "right" }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $align }) =>
    $align === "right" ? "flex-end" : "flex-start"};
  gap: ${({ theme }) => theme.gaps["3xl"]};
  justify-items: bottom;

  @media (max-width: 48rem) {
    align-items: center;
    order: ${({ $align }) => ($align === "right" ? 3 : 1)};
  }
`;

export const AvailabilityBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.eyebrow};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.8;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: ${({ theme }) => theme.radii.circle};
    background: ${({ theme }) => theme.colors.green};
    box-shadow: ${({ theme }) => theme.shadows.icon};
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(0.85);
    }
  }
`;

export const Role = styled.h2`
  font-size: clamp(
    ${({ theme }) => theme.fontSizes.body},
    1.8vw,
    ${({ theme }) => theme.fontSizes.roleMax}
  );
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  line-height: ${({ theme }) => theme.lineHeights.role};
  color: ${({ theme }) => theme.colors.black};
  text-wrap: balance;

  @media (max-width: 68.75rem) and (min-width: 48.06rem) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const Name = styled(motion.h1)`
  font-size: clamp(
    ${({ theme }) => theme.fontSizes.nameMin},
    7.5vw,
    ${({ theme }) => theme.fontSizes.nameMax}
  );
  font-weight: ${({ theme }) => theme.fontWeights.black};
  letter-spacing: ${({ theme }) => theme.letterSpacings.tight};
  text-transform: uppercase;
  line-height: ${({ theme }) => theme.lineHeights.tight};
  color: ${({ theme }) => theme.colors.black};
  text-wrap: balance;

  @media (max-width: 68.75rem) and (min-width: 48.06rem) {
    font-size: clamp(
      ${({ theme }) => theme.fontSizes.nameTabletMin},
      5vw,
      ${({ theme }) => theme.fontSizes.nameTabletMax}
    );
  }

  @media (max-width: 48rem) {
    display: none;
  }
`;

export const MobileName = styled(motion.h1)`
  display: none;
  font-size: clamp(
    ${({ theme }) => theme.fontSizes.mobileNameMin},
    10vw,
    ${({ theme }) => theme.fontSizes.mobileNameMax}
  );
  font-weight: ${({ theme }) => theme.fontWeights.black};
  letter-spacing: ${({ theme }) => theme.letterSpacings.tight};
  text-transform: uppercase;
  line-height: ${({ theme }) => theme.lineHeights.normal};
  color: ${({ theme }) => theme.colors.black};
  margin-top: 0.25rem;

  @media (max-width: 48rem) {
    display: block;
    order: 2;
  }
`;

export const Intro = styled.p`
  max-width: 21.25rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights.body};
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.92;

  @media (max-width: 68.75rem) and (min-width: 48.06rem) {
    max-width: 12.5rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: ${({ theme }) => theme.lineHeights.compact};
  }

  @media (max-width: 48rem) {
    max-width: 27.5rem;
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.xl};
  flex-wrap: wrap;

  @media (max-width: 48rem) {
    justify-content: center;
  }
`;
