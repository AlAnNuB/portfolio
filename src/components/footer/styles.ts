import styled from "styled-components";

export const Band = styled.div`
  background: ${({ theme }) => theme.black};
`;

export const Shell = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 8px 32px 28px;

  @media (max-width: 768px) {
    padding: 8px 16px 24px;
  }
`;

export const ThankButton = styled.button`
  min-height: 44px;
  padding: 10px 18px;
  border: 0;
  border-radius: ${({ theme }) => theme.radiusMd};
  background: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.black};
  cursor: pointer;
  font: inherit;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition:
    transform 150ms ease-out,
    opacity 150ms ease-out;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const Copy = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.white};
`;

export const Icons = styled.div`
  display: flex;
  gap: 4px;
`;

export const IconLink = styled.a`
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.white};

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.yellow};
    }
  }
`;

export const ModalOverlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(36, 34, 45, 0.72);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition:
    opacity 220ms ease-out,
    visibility 220ms ease-out;
`;

export const Modal = styled.div<{ $open: boolean }>`
  position: relative;
  width: min(100%, 520px);
  padding: 40px 32px 32px;
  border-radius: ${({ theme }) => theme.radiusSm};
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  transform: ${({ $open }) =>
    $open ? "translateY(0) scale(1)" : "translateY(10px) scale(0.97)"};
  transition: transform 220ms cubic-bezier(0.32, 0.72, 0, 1);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
`;

export const ModalTitle = styled.h2`
  max-width: 14ch;
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 900;
  line-height: 0.98;
  text-transform: uppercase;
`;

export const ModalText = styled.p`
  margin-top: 20px;
  max-width: 52ch;
  font-size: 15px;
  line-height: 1.6;
`;

export const ModalLink = styled.a`
  color: ${({ theme }) => theme.purple};
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
`;
