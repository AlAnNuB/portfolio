import styled from "styled-components";
import { Hexagon } from "@/components/hexagon";

export const Section = styled.section`
  background: ${({ theme }) => theme.black};
  padding: 80px 32px;

  @media (max-width: 768px) {
    padding: 56px 16px;
  }
`;

export const Inner = styled.div`
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  overflow: hidden;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const Lead = styled.h2`
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 800;
  line-height: 1.15;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  text-wrap: balance;
`;

export const Copy = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  color: ${({ theme }) => theme.white};
  opacity: 0.86;
`;

export const Hive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 520px;
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
    margin-top: -20px;
  }
`;

export const TechnologyItem = styled.div`
  position: relative;
  z-index: 0;
  width: 104px;
  height: 117px;
  cursor: help;
  transition: transform 180ms ease-out;

  &:hover,
  &:focus,
  &:focus-visible {
    z-index: 2;
    transform: translateY(-6px);
  }

  & > span {
    position: absolute;
    left: 50%;
    bottom: calc(100% - 8px);
    transform: translate(-50%, 4px);
    padding: 8px 10px;
    border-radius: ${({ theme }) => theme.radiusXs};
    background: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition:
      opacity 160ms ease-out,
      transform 160ms ease-out;
  }

  &:hover > span,
  &:focus > span,
  &:focus-visible > span {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  @media (max-width: 768px) {
    width: min(104px, calc(20vw - 6.4px));
    height: min(117px, calc(22.4vw - 7.168px));

    & > span {
      font-size: 10px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    & > span {
      transition: none;
    }
  }
`;

export const TechnologyHexagon = styled(Hexagon)`
  @media (max-width: 768px) {
    width: min(104px, calc(20vw - 6.4px));
    height: min(117px, calc(22.4vw - 7.168px));
  }
`;

export const Tooltip = styled.span``;

export const Icon = styled.img`
  width: 48px;
  height: 48px;
  padding: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.black};
  object-fit: contain;

  @media (max-width: 768px) {
    width: 38px;
    height: 38px;
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
