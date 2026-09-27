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
  gap: 24px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const Card = styled(motion.article)`
  padding: 36px 32px;
  border-radius: 20px;
  background: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  gap: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(36, 34, 45, 0.16);
  position: relative;
  overflow: hidden;
  transition:
    transform 240ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 240ms ease,
    border-color 240ms ease;

  /* Subtle background pattern */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(252, 219, 116, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px rgba(36, 34, 45, 0.25);
    border-color: rgba(252, 219, 116, 0.3);
  }

  @media (max-width: 768px) {
    padding: 28px 20px;
  }
`;

export const KindHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Kind = styled.span`
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.yellow};
`;

export const EntryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;

  /* Timeline connecting line */
  &::before {
    content: "";
    position: absolute;
    left: 7px;
    top: 14px;
    bottom: 14px;
    width: 1px;
    background: rgba(252, 219, 116, 0.25);
  }
`;

export const Entry = styled.div`
  display: flex;
  gap: 16px;
  position: relative;
`;

export const Bullet = styled.div`
  width: 15px;
  height: 17px;
  flex-shrink: 0;
  margin-top: 4px;
  position: relative;
  z-index: 1;

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.yellow};
    filter: drop-shadow(0 0 6px rgba(252, 219, 116, 0.4));
  }
`;

export const EntryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  p {
    margin-top: 6px;
    font-size: 13.5px;
    line-height: 1.65;
    opacity: 0.82;
  }
`;

export const Title = styled.h3`
  font-size: 19px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  line-height: 1.25;
  color: ${({ theme }) => theme.white};
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.yellow};
  opacity: 0.9;
  letter-spacing: 0.02em;
`;

export const Period = styled.span`
  background: rgba(255, 255, 255, 0.08);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.8);
`;
