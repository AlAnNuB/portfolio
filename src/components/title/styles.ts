import styled, { keyframes } from "styled-components";

const rubberBand = keyframes`
    0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
`;

export const Container = styled.h1`
  display: flex;
  user-select: none;
  flex-wrap: wrap;
  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: var(--font-bold);
  line-height: 1;
  background-color: transparent;
`;

export const Phrases = styled.div`
  display: flex;
  background-color: transparent;

  &:not(:first-child) {
    margin-left: clamp(0.5rem, 1vw, 1rem);
  }
`;

export const Letter = styled.span<{ $themeProp: "default" | "primary" }>`
  background-color: transparent;
  color: ${({ theme, $themeProp }) => ($themeProp === "default" ? theme.color : theme.primaryColor)};
  transition: all 0.3s ease-out;

  &:hover {
    color: ${({ theme, $themeProp }) => ($themeProp === "default" ? theme.primaryColor : theme.color)};
    animation: 1s linear ${rubberBand};
  }
`;
