import styled from "styled-components";

export const Bar = styled.header`
  position: absolute;
  top: 0;
  z-index: 20;
  height: var(--header-height);
  width: 100%;
  background: transparent;
`;

export const Shell = styled.div`
  max-width: 1312px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 0 16px;

  @media (max-width: 768px) {
    padding: 0 8px;
  }
`;

export const Brand = styled.div`
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 0 18px 0 20px;
  background: ${({ theme }) => theme.black};
  border-radius: ${({ theme }) => theme.radiusMd};
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  font-weight: 700;

  @media (prefers-reduced-motion: no-preference) {
    animation: header-item-in 240ms cubic-bezier(0.32, 0.72, 0, 1) both;
  }

  @keyframes header-item-in {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const BrandLink = styled.a`
  color: inherit;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  padding: 8px 10px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.black};
  transition-property: color;
  transition-duration: 160ms;
  transition-timing-function: ease;

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.purple};
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  @media (prefers-reduced-motion: no-preference) {
    animation: header-item-in 240ms cubic-bezier(0.32, 0.72, 0, 1) 70ms both;
  }
`;

export const IconLink = styled.a`
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.black};
  transition-property: color, transform;
  transition-duration: 160ms;
  transition-timing-function: ease-out;

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.purple};
    }
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const MenuButton = styled.button`
  display: grid;
  width: 20px;
  height: 20px;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  place-items: center;
`;

export const Overlay = styled.button<{ $open: boolean }>`
  position: fixed;
  inset: var(--header-height) 0 0;
  border: 0;
  background: rgba(36, 34, 45, 0.35);
  cursor: pointer;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  transition:
    opacity 180ms ease-out,
    visibility 180ms ease-out;
`;

export const MobilePanel = styled.nav<{ $open: boolean }>`
  display: flex;
  position: fixed;
  top: var(--header-height);
  right: 0;
  width: min(80vw, 320px);
  height: calc(100dvh - var(--header-height));
  flex-direction: column;
  gap: 8px;
  padding: 24px 16px;
  background: ${({ theme }) => theme.black};
  z-index: 21;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(16px)")};
  transition:
    opacity 220ms ease-out,
    transform 220ms cubic-bezier(0.32, 0.72, 0, 1),
    visibility 220ms ease-out;

  ${NavLink} {
    color: ${({ theme }) => theme.white};

    @media (prefers-reduced-motion: no-preference) {
      opacity: ${({ $open }) => ($open ? 1 : 0)};
      transform: ${({ $open }) =>
        $open ? "translateX(0)" : "translateX(10px)"};
      transition:
        opacity 160ms ease-out,
        transform 160ms ease-out;

      &:nth-child(1) {
        transition-delay: ${({ $open }) => ($open ? "50ms" : "0ms")};
      }
      &:nth-child(2) {
        transition-delay: ${({ $open }) => ($open ? "80ms" : "0ms")};
      }
      &:nth-child(3) {
        transition-delay: ${({ $open }) => ($open ? "110ms" : "0ms")};
      }
      &:nth-child(4) {
        transition-delay: ${({ $open }) => ($open ? "140ms" : "0ms")};
      }
      &:nth-child(5) {
        transition-delay: ${({ $open }) => ($open ? "170ms" : "0ms")};
      }
      &:nth-child(6) {
        transition-delay: ${({ $open }) => ($open ? "200ms" : "0ms")};
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    ${NavLink} {
      transition: none;
    }
  }
`;
