import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex: 1;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;

  @media (max-width: 1200px) {
    padding: 1rem;
  }
`;
