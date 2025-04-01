import styled from "styled-components";

export const Content = styled.main`
  display: flex;
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1200px) {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    padding-top: 5rem;
  }
`;
