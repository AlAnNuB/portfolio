import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  background: ${({ theme }) => theme.yellow};
  overflow: hidden;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 100px 32px 56px;

  @media (max-width: 768px) {
    min-height: 100svh;
    padding: 84px 20px 48px;
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
  font-size: clamp(30px, 7.5vw, 92px);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.black};
  opacity: 0.08;
  pointer-events: none;
  line-height: 1;
  white-space: nowrap;
  user-select: none;
  z-index: 0;

  @media (max-width: 768px) {
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
  width: min(100%, 1312px);
  grid-template-columns: minmax(260px, 1fr) 460px minmax(260px, 1fr);
  gap: 32px;
  align-items: end;

  @media (max-width: 1100px) and (min-width: 769px) {
    grid-template-columns: minmax(0, 1fr) 360px minmax(0, 1fr);
    gap: 16px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 24px;
  }
`;

export const TextBlock = styled(motion.div)<{ $align?: "right" }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $align }) => ($align === "right" ? "flex-end" : "flex-start")};
  gap: 20px;
  justify-items: bottom;

  @media (max-width: 768px) {
    align-items: center;
    order: ${({ $align }) => ($align === "right" ? 3 : 1)};
  }
`;

export const AvailabilityBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.black};
  opacity: 0.8;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 10px #10b981;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% {
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
  font-size: clamp(16px, 1.8vw, 22px);
  font-weight: 800;
  line-height: 1.35;
  color: ${({ theme }) => theme.black};
  text-wrap: balance;

  @media (max-width: 1100px) and (min-width: 769px) {
    font-size: 14px;
  }
`;

export const Name = styled(motion.h1)`
  font-size: clamp(48px, 7.5vw, 84px);
  font-weight: 900;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  line-height: 0.9;
  color: ${({ theme }) => theme.black};
  text-wrap: balance;

  @media (max-width: 1100px) and (min-width: 769px) {
    font-size: clamp(38px, 5vw, 54px);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileName = styled(motion.h1)`
  display: none;
  font-size: clamp(36px, 10vw, 52px);
  font-weight: 900;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  line-height: 1;
  color: ${({ theme }) => theme.black};
  margin-top: 4px;

  @media (max-width: 768px) {
    display: block;
    order: 2;
  }
`;

export const Intro = styled.p`
  max-width: 340px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  color: ${({ theme }) => theme.black};
  opacity: 0.92;

  @media (max-width: 1100px) and (min-width: 769px) {
    max-width: 200px;
    font-size: 11px;
    line-height: 1.45;
  }

  @media (max-width: 768px) {
    max-width: 440px;
    font-size: 13px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
