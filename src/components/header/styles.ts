import { motion } from "framer-motion";
import styled from "styled-components";

export const Bar = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  z-index: 50;
  height: 3.75rem;
  width: 100%;
  background: ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.yellow92 : theme.colors.yellow};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(0.75rem)" : "none")};
  box-shadow: ${({ $scrolled, theme }) =>
    $scrolled ? theme.shadows.header : "none"};
  transition:
    background-color ${({ theme }) => theme.motion.slow},
    box-shadow ${({ theme }) => theme.motion.slow},
    backdrop-filter ${({ theme }) => theme.motion.slow};
`;

export const Shell = styled.div`
  max-width: 82rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gaps["4xl"]};
  padding: 0 1.5rem;

  @media (max-width: 48rem) {
    padding: 0 1rem;
  }
`;

export const Brand = styled(motion.div)`
  height: 2.25rem;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.xl};
  padding: 0 1.125rem;
  background: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  box-shadow: 0 0.25rem 0.75rem ${({ theme }) => theme.colors.black25};
  transition: transform ${({ theme }) => theme.motion.base};

  &:hover {
    transform: scale(1.03);
  }
`;

export const BrandLink = styled.a`
  color: inherit;
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.sm};
  position: relative;

  @media (max-width: 56.25rem) {
    display: none;
  }
`;

export const NavLink = styled.a<{ $active?: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.nav};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
  opacity: ${({ $active }) => ($active ? 1 : 0.75)};
  transition:
    opacity 180ms ease,
    color 180ms ease;

  &:hover {
    opacity: 1;
  }

  ${({ $active, theme }) =>
    $active &&
    `
    &::after {
      content: "";
      position: absolute;
      bottom: 0.125rem;
      left: 0.75rem;
      right: 0.75rem;
      height: 0.125rem;
      background: ${theme.colors.black};
      border-radius: ${theme.radii.hairline};
    }
  `}
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.sm};
`;

export const IconLink = styled(motion.a)`
  width: 2.25rem;
  height: 2.25rem;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.radii.circle};
  background: ${({ theme }) => theme.colors.black06};
  transition:
    background-color ${({ theme }) => theme.motion.base},
    color ${({ theme }) => theme.motion.base};

  &:hover {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const MenuButton = styled.button`
  display: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  place-items: center;

  @media (max-width: 56.25rem) {
    display: grid;
  }
`;

export const Overlay = styled.button<{ $open: boolean }>`
  position: fixed;
  inset: 3.75rem 0 0;
  border: 0;
  background: ${({ theme }) => theme.colors.black45};
  backdrop-filter: blur(0.25rem);
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
  top: 3.75rem;
  right: 0;
  width: min(85vw, 20rem);
  height: calc(100dvh - 3.75rem);
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.xl};
  padding: 2rem 1.5rem;
  background: ${({ theme }) => theme.colors.black};
  border-left: 1px solid ${({ theme }) => theme.colors.white08};
  z-index: 51;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transform: ${({ $open }) =>
    $open ? "translateX(0)" : "translateX(1.25rem)"};
  transition:
    opacity 240ms ease-out,
    transform 240ms cubic-bezier(0.16, 1, 0.3, 1),
    visibility 240ms ease-out;

  ${NavLink} {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.base};
    padding: 0.625rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white06};

    &::after {
      background: ${({ theme }) => theme.colors.yellow};
      bottom: 0;
      left: 0;
      right: auto;
      width: 1.5rem;
    }
  }
`;
