import styled from "styled-components";

export const Content = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
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

export const Description = styled.p`
  font-size: clamp(.5rem, 1.5vw, 1rem);
  background: transparent;
  text-align: center;
`;

export const TechnologiesContainer = styled.section`
  display: flex;
  width: 60%;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 80%;
    gap: 1rem;
  }
`;
