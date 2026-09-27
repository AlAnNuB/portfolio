import { motion } from "framer-motion";
import styled from "styled-components";

export const Bar = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  z-index: 50;
  height: 60px;
  width: 100%;
  background: ${({ $scrolled, theme }) => ($scrolled ? "rgba(252, 219, 116, 0.92)" : theme.yellow)};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(12px)" : "none")};
  box-shadow: ${({ $scrolled }) => ($scrolled ? "0 4px 20px rgba(36, 34, 45, 0.12)" : "none")};
  transition:
    background-color 300ms ease,
    box-shadow 300ms ease,
    backdrop-filter 300ms ease;
`;

export const Shell = styled.div`
  max-width: 1312px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const Brand = styled(motion.div)`
  height: 36px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 0 18px;
  background: ${({ theme }) => theme.black};
  border-radius: ${({ theme }) => theme.radiusMd};
  color: ${({ theme }) => theme.white};
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 4px 12px rgba(36, 34, 45, 0.25);
  transition: transform 200ms ease;

  &:hover {
    transform: scale(1.03);
  }
`;

export const BrandLink = styled.a`
  color: inherit;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavLink = styled.a<{ $active?: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.black};
  opacity: ${({ $active }) => ($active ? 1 : 0.75)};
  transition:
    opacity 180ms ease,
    color 180ms ease;

  &:hover {
    opacity: 1;
  }

  ${({ $active }) =>
    $active &&
    `
    &::after {
      content: "";
      position: absolute;
      bottom: 2px;
      left: 12px;
      right: 12px;
      height: 2px;
      background: #24222D;
      border-radius: 2px;
    }
  `}
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const IconLink = styled(motion.a)`
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.black};
  border-radius: 50%;
  background: rgba(36, 34, 45, 0.06);
  transition:
    background-color 200ms ease,
    color 200ms ease;

  &:hover {
    background: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.yellow};
  }
`;

export const MenuButton = styled.button`
  display: none;
  width: 24px;
  height: 24px;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  place-items: center;

  @media (max-width: 900px) {
    display: grid;
  }
`;

export const Overlay = styled.button<{ $open: boolean }>`
  position: fixed;
  inset: 60px 0 0;
  border: 0;
  background: rgba(36, 34, 45, 0.45);
  backdrop-filter: blur(4px);
  cursor: pointer;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  transition:
    opacity 240ms ease-out,
    visibility 240ms ease-out;
`;

export const MobilePanel = styled.nav<{ $open: boolean }>`
  display: flex;
  position: fixed;
  top: 60px;
  right: 0;
  width: min(85vw, 320px);
  height: calc(100dvh - 60px);
  flex-direction: column;
  gap: 12px;
  padding: 32px 24px;
  background: ${({ theme }) => theme.black};
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 51;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(20px)")};
  transition:
    opacity 240ms ease-out,
    transform 240ms cubic-bezier(0.16, 1, 0.3, 1),
    visibility 240ms ease-out;

  ${NavLink} {
    color: ${({ theme }) => theme.white};
    font-size: 13px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);

    &::after {
      background: ${({ theme }) => theme.yellow};
      bottom: 0;
      left: 0;
      right: auto;
      width: 24px;
    }
  }
`;
