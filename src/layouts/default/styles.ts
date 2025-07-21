import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex: 1;
  padding: 0 2rem;
  max-width: var(--max-width);
  margin: 0 auto;
  width: 100vw;
  height: 100vh;

  @media (max-width: var(--max-width)) {
    padding: 1rem;
  }
`;

export const GreenBall = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  z-index: -1;
  width: 50vw;
  height: 50vw;
  border-radius: 50%;
  box-shadow: -4px 150px 400px 80px ${({ theme }) => theme.backgroundDetail};
  -webkit-box-shadow: -4px 150px 400px 80px ${({ theme }) => theme.backgroundDetail};
  -moz-box-shadow: -4px 150px 400px 80px ${({ theme }) => theme.backgroundDetail};
  opacity: .5;
`;
