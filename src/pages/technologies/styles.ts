import styled from "styled-components";

export const Content = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: .5rem;
    padding: 0;
  }
`;

export const TechnologiesGrid = styled.div`
  display: grid;
  max-height: 90%;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: .5rem;
  }
`;
