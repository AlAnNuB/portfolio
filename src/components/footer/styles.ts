import styled from "styled-components";

export const Band = styled.div`
  background: ${({ theme }) => theme.colors.black};
`;

export const Shell = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gaps["2xl"]};
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0.5rem 2rem 1.75rem;

  @media (max-width: 48rem) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    padding: 0.5rem 1rem 1.5rem;
  }
`;

export const ThankButton = styled.button`
  min-height: 2.75rem;
  padding: 0.625rem 1.125rem;
  border: 0;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  font: inherit;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.uppercase};
  text-transform: uppercase;
  transition:
    transform ${({ theme }) => theme.motion.fast},
    opacity ${({ theme }) => theme.motion.fast};

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 26.25rem) {
    padding-inline: 0.75rem;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const Copy = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.white};
`;

export const Icons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps.xs};

  @media (max-width: 48rem) {
    grid-column: 1 / -1;
    justify-content: center;
  }
`;

export const IconLink = styled.a`
  width: 2.75rem;
  height: 2.75rem;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.white};

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
`;

export const ModalOverlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  place-items: center;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.black72};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition:
    opacity 220ms ease-out,
    visibility 220ms ease-out;
`;

export const Modal = styled.div<{ $open: boolean }>`
  position: relative;
  width: min(100%, 32.5rem);
  padding: 2.5rem 2rem 2rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  transform: ${({ $open }) =>
    $open ? "translateY(0) scale(1)" : "translateY(0.625rem) scale(0.97)"};
  transition: transform 220ms cubic-bezier(0.32, 0.72, 0, 1);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 2.75rem;
  height: 2.75rem;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: ${({ theme }) => theme.radii.circle};
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const ModalTitle = styled.h2`
  max-width: 14ch;
  font-size: clamp(
    ${({ theme }) => theme.fontSizes.modalMin},
    5vw,
    ${({ theme }) => theme.fontSizes.modalMax}
  );
  font-weight: ${({ theme }) => theme.fontWeights.black};
  line-height: ${({ theme }) => theme.lineHeights.snug};
  text-transform: uppercase;
`;

export const ModalText = styled.p`
  margin-top: 1.25rem;
  max-width: 52ch;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: ${({ theme }) => theme.lineHeights.body};
`;

export const ModalLink = styled.a`
  color: ${({ theme }) => theme.colors.purple};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-decoration: underline;
  text-underline-offset: 0.1875rem;
`;
