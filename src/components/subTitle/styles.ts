import styled from "styled-components";

export const Container = styled.h2`
  font-size: clamp(1.2rem, 1.5vw, 3rem);
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.primaryColor};
`;
