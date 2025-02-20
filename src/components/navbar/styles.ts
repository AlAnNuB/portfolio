import styled, { keyframes } from "styled-components";

const scrollIndicator = keyframes`
  0% {
    opacity: 1;
    top: .5rem;
  }
  100% {
    opacity: 0;
    top: 1.5rem;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  z-index: 10;
  background-color: transparent;
  
  @media (max-width: 768px) {
    display: none;
  }
`;
export const LinkContent = styled.div<{ $isActive: boolean }>`
  position: relative;
  padding: 0.5rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  span {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    margin-left: 0.5rem;
    transition: all 0.5s linear;
  }

  &::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    border-radius: ${(props) => (props.$isActive ? "5px" : "0")};
    border-left: ${({ theme, $isActive }) => ($isActive ? `2px solid ${theme.color}` : "none")};
    background-color: ${({ theme }) => theme.color};
    transition: all 0.5s linear;
  }

  &:hover {
    span {
      visibility: visible;
      opacity: 1;
      transition: all 0.5s linear;
    }
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 1.5rem;
  height: 2.5rem;
  box-shadow: inset 0 0 0 2px ${({ theme }) => theme.color};
  border-radius: 2rem;

  &::before {
    content: " ";
    position: absolute;
    top: .5rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2rem;
    width: .5rem;
    height: .5rem;
    background-color: ${({ theme }) => theme.color};
    animation: ${scrollIndicator} 1.5s linear infinite;
  }
`;
