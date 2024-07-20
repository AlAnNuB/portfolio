import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 0 1rem;
  transition: all 0.5s linear;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem;
  overflow: auto;
`;
