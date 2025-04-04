import styled from "styled-components";

export const Content = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const TextContent = styled.section`
  display: flex;
  flex:1;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  max-width: 600px;

  @media (max-width: 768px) {
    transform: translateY(-20%);
  }
`;

export const Greeting = styled.h2`
  color: ${({ theme }) => theme.color};
  font-size: clamp(1.5rem, 1vw, 2rem);
  font-weight: 400;

  span {
    color: ${({ theme }) => theme.primaryColor};
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.h2`
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  font-weight: 400;
  color: ${({ theme }) => theme.color};
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  transform: translateX(-25%);
  aspect-ratio: 16/9;

  @media (max-width: 768px) {
    transform: translateX(0);
    width: 60%;
  }
`;

export const ImageProgramming = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
