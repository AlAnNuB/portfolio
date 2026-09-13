import styled from "styled-components";

export const Button = styled.a<{ $variant?: "dark" | "light" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 12px 28px;
  background: ${({ $variant, theme }) =>
    $variant === "light" ? theme.yellow : theme.black};
  color: ${({ $variant, theme }) =>
    $variant === "light" ? theme.black : theme.white};
  border-radius: ${({ theme }) => theme.radiusMd};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  transition-property: transform, opacity;
  transition-duration: 160ms;
  transition-timing-function: ease-out;

  @media (hover: hover) {
    &:hover {
      opacity: 0.88;
    }
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 1023px) and (min-width: 701px) {
    padding-inline: 16px;
    font-size: 10px;
  }
`;
