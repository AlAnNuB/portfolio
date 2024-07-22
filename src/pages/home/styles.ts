import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--backgroundTextContent);
  backdrop-filter: blur(4px);
`;

export const Title = styled.h1`
  font-size: clamp(1.5rem, 4vw, 4rem);
  font-weight: 900;
  background: transparent;
`;

export const Description = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  background: transparent;
`;

export const ImagePrograming = styled.img`
  width: clamp(15rem, 60%, 50rem);
  position: absolute;
  right: 0;
`