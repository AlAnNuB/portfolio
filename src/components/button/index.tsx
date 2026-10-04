import { ArrowRightIcon } from "@phosphor-icons/react";
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, forwardRef, type ReactNode } from "react";
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
  gap: ${({ theme }) => theme.gaps.md};
  padding: 0.25rem;
  padding-right: 1.25rem;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.nav};
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid transparent;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition:
    transform 200ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 200ms cubic-bezier(0.16, 1, 0.3, 1),
    background-color ${({ theme }) => theme.motion.base},
    color ${({ theme }) => theme.motion.base},
    border-color ${({ theme }) => theme.motion.base};

  ${({ $variant = "dark", theme }) => {
    if ($variant === "light") {
      return css`
        background: ${theme.colors.yellow};
        color: ${theme.colors.black};
        box-shadow: 0 0.25rem 0.875rem ${theme.colors.yellow25};

        &:hover {
          transform: translateY(-0.125rem);
          box-shadow: 0 0.5rem 1.25rem ${theme.colors.yellow38};
          background: ${theme.colors.yellowBright};
        }

        &:active {
          transform: scale(0.97) translateY(0);
        }
      `;
    }

    if ($variant === "outline") {
      return css`
        background: transparent;
        color: ${theme.colors.white};
        border-color: ${theme.colors.white25};

        &:hover {
          transform: translateY(-0.125rem);
          border-color: ${theme.colors.yellow};
          color: ${theme.colors.yellow};
          background: ${theme.colors.yellow08};
        }

        &:active {
          transform: scale(0.97) translateY(0);
        }
      `;
    }

    return css`
      background: ${theme.colors.black};
      color: ${theme.colors.white};
      box-shadow: 0 0.25rem 1rem ${theme.colors.black20};

      &:hover {
        transform: translateY(-0.125rem);
        box-shadow: 0 0.5rem 1.5rem ${theme.colors.black32};
        background: ${theme.colors.inkSoft};
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
    border-radius: ${({ theme }) => theme.radii.circle};
    transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
    flex-shrink: 0;

    ${({ $variant, theme }) => {
      if ($variant === "light") {
        return css`
          background: ${theme.colors.black};
          color: ${theme.colors.yellow};
        `;
      }
      if ($variant === "outline") {
        return css`
          background: ${theme.colors.white15};
          color: currentColor;
        `;
      }
      return css`
        background: ${theme.colors.white};
        color: ${theme.colors.black};
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
    transform: translateX(0.25rem);
  }

  @media (max-width: 63.94rem) and (min-width: 43.81rem) {
    font-size: ${({ theme }) => theme.fontSizes.buttonCompact};
  }
`;

const StyledAnchor = styled.a<{ $variant?: "dark" | "light" | "outline" }>`
  ${sharedStyles}
`;

const StyledButton = styled.button<{ $variant?: "dark" | "light" | "outline" }>`
  ${sharedStyles}
`;

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(({ children, $variant = "dark", showArrow = true, ...props }, ref) => {
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
      <StyledButton ref={ref as React.Ref<HTMLButtonElement>} $variant={$variant} {...buttonProps}>
        {content}
      </StyledButton>
    );
  }

  const { as: _as, ...anchorProps } = props as ButtonAsAnchor;
  void _as;
  return (
    <StyledAnchor ref={ref as React.Ref<HTMLAnchorElement>} $variant={$variant} {...anchorProps}>
      {content}
    </StyledAnchor>
  );
});

Button.displayName = "Button";
