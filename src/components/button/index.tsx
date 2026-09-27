import { ArrowRightIcon } from "@phosphor-icons/react";
import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  forwardRef,
  type ReactNode,
} from "react";
import styled, { css } from "styled-components";

type ButtonBaseProps = {
  $variant?: "dark" | "light" | "outline";
  showArrow?: boolean;
  children: ReactNode;
};

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: "a";
    href: string;
  };

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as: "button";
    href?: undefined;
  };

export type ButtonProps = ButtonAsAnchor | ButtonAsButton;

const sharedStyles = css<{ $variant?: "dark" | "light" | "outline" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.25rem;
  padding-right: 1.25rem;
  border-radius: ${({ theme }) => theme.radiusMd};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid transparent;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition:
    transform 200ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 200ms cubic-bezier(0.16, 1, 0.3, 1),
    background-color 200ms ease,
    color 200ms ease,
    border-color 200ms ease;

  ${({ $variant = "dark", theme }) => {
    if ($variant === "light") {
      return css`
        background: ${theme.yellow};
        color: ${theme.black};
        box-shadow: 0 4px 14px rgba(252, 219, 116, 0.25);

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(252, 219, 116, 0.38);
          background: #ffe38f;
        }

        &:active {
          transform: scale(0.97) translateY(0);
        }
      `;
    }

    if ($variant === "outline") {
      return css`
        background: transparent;
        color: ${theme.white};
        border-color: rgba(250, 250, 250, 0.25);

        &:hover {
          transform: translateY(-2px);
          border-color: ${theme.yellow};
          color: ${theme.yellow};
          background: rgba(252, 219, 116, 0.08);
        }

        &:active {
          transform: scale(0.97) translateY(0);
        }
      `;
    }

    // Default dark
    return css`
      background: ${theme.black};
      color: ${theme.white};
      box-shadow: 0 4px 16px rgba(36, 34, 45, 0.2);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(36, 34, 45, 0.32);
        background: #2e2c38;
      }

      &:active {
        transform: scale(0.97) translateY(0);
      }
    `;
  }}

  .arrow-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.063rem;
    height: 2.063rem;
    border-radius: 50%;
    transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
    flex-shrink: 0;

    ${({ $variant, theme }) => {
      if ($variant === "light") {
        return css`
          background: ${theme.black};
          color: ${theme.yellow};
        `;
      }
      if ($variant === "outline") {
        return css`
          background: rgba(255, 255, 255, 0.15);
          color: currentColor;
        `;
      }
      // default dark variant
      return css`
        background: ${theme.white};
        color: ${theme.black};
      `;
    }}

    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: inherit;
      fill: currentColor;
    }
  }

  &:hover .arrow-icon {
    transform: translateX(4px);
  }

  @media (max-width: 1023px) and (min-width: 701px) {
    font-size: 0.688rem;
  }
`;

const StyledAnchor = styled.a<{ $variant?: "dark" | "light" | "outline" }>`
  ${sharedStyles}
`;

const StyledButton = styled.button<{ $variant?: "dark" | "light" | "outline" }>`
  ${sharedStyles}
`;

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>(({ children, $variant = "dark", showArrow = true, ...props }, ref) => {
  const content = (
    <>
      {showArrow && (
        <span className="arrow-icon">
          <ArrowRightIcon weight="bold" />
        </span>
      )}
      <span>{children}</span>
    </>
  );

  if (props.as === "button" || !props.href) {
    const { as: _as, ...buttonProps } = props as ButtonAsButton;
    void _as;
    return (
      <StyledButton
        ref={ref as React.Ref<HTMLButtonElement>}
        $variant={$variant}
        {...buttonProps}
      >
        {content}
      </StyledButton>
    );
  }

  const { as: _as, ...anchorProps } = props as ButtonAsAnchor;
  void _as;
  return (
    <StyledAnchor
      ref={ref as React.Ref<HTMLAnchorElement>}
      $variant={$variant}
      {...anchorProps}
    >
      {content}
    </StyledAnchor>
  );
});

Button.displayName = "Button";
