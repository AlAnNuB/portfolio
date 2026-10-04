import styled from "styled-components";

export const Container = styled.h2`
  font-size: clamp(${({ theme }) => theme.fontSizes.xl}, 1.5vw, ${({ theme }) => theme.fontSizes.displayLg});
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-align: center;
  color: ${({ theme }) => theme.colors.yellow};
`;
