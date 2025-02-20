import styled from "styled-components";

export const Content = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--backgroundTextContent);
  backdrop-filter: blur(4px);
  width: 50%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
