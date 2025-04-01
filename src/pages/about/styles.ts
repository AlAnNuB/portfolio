import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem 0;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 6rem 2rem;
  }
`;

export const Description = styled.p`
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  line-height: 1.8;
  color: ${({ theme }) => theme.color};
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
