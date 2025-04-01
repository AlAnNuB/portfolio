import { ComponentProps, ElementType } from "react";
import styled from "styled-components";

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.buttonPrimary};
  color: ${({ theme }) => theme.color};
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    opacity: .8;
    transform: translateY(-2px);
  }
`;

export interface LinkButtonProps extends ComponentProps<typeof LinkButton> {
	as?: ElementType;
}

LinkButton.displayName = "LinkButton";
