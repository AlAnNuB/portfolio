import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled.section`
  background: ${({ theme }) => theme.yellow};
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
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Card = styled(motion.a)`
  display: flex;
  flex-direction: column;
  min-height: 280px;
  border-radius: 20px;
  background: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 24px rgba(36, 34, 45, 0.15);
  transition:
    transform 280ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 280ms cubic-bezier(0.16, 1, 0.3, 1),
    border-color 280ms ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 36px rgba(36, 34, 45, 0.28);
    border-color: rgba(252, 219, 116, 0.4);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const CardCover = styled.div<{ $gradientIndex: number }>`
  height: 120px;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: ${({ $gradientIndex }) => {
    const gradients = [
      "linear-gradient(135deg, #1e1d27 0%, #2e2c3b 50%, #1a1923 100%)",
      "linear-gradient(135deg, #262432 0%, #3a3749 50%, #1e1d27 100%)",
      "linear-gradient(135deg, #1f202b 0%, #2d2e3d 50%, #171821 100%)",
      "linear-gradient(135deg, #2a2838 0%, #3e3a52 50%, #1d1c26 100%)",
      "linear-gradient(135deg, #22212d 0%, #333142 50%, #191822 100%)",
      "linear-gradient(135deg, #282635 0%, #3b384d 50%, #1b1a24 100%)",
    ];
    return gradients[$gradientIndex % gradients.length];
  }};

  /* Geometric tech pattern lines */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.15;
    background-image: radial-gradient(rgba(252, 219, 116, 0.8) 1px, transparent 1px);
    background-size: 16px 16px;
    transition: transform 400ms ease;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: linear-gradient(to top, ${({ theme }) => theme.black}, transparent);
  }

  ${Card}:hover &::before {
    transform: scale(1.1);
  }
`;

export const CoverBadge = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(36, 34, 45, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.yellow};
  transition:
    transform 240ms cubic-bezier(0.16, 1, 0.3, 1),
    background-color 240ms ease;

  ${Card}:hover & {
    transform: translate(2px, -2px) rotate(45deg);
    background: ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.black};
  }
`;

export const CardBody = styled.div`
  padding: 0 24px 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  justify-content: flex-end;
`;

export const Tag = styled.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.yellow};
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.yellow};
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.white};
  line-height: 1.2;
  transition: color 200ms ease;

  ${Card}:hover & {
    color: ${({ theme }) => theme.yellow};
  }
`;

export const Meta = styled.p`
  font-size: 13px;
  line-height: 1.6;
  color: ${({ theme }) => theme.white};
  opacity: 0.78;
`;
