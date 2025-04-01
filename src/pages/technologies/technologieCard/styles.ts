import styled from "styled-components";

export const Container = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  img {
    width: 2.5rem;
    height: 2.5rem;
  }

  figcaption: {
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color};
    text-align: center;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.textColorHover};
    box-shadow: 0 0 20px ${({ theme }) => theme.primaryColor};
  }

  @media (max-width: 1024px) {
    gap: .5rem;
    img {
      width: 2rem;
      height: 2rem;
    }
  }

  @media (max-width: 768px) {
    gap: .1rem;
    text-align: center;
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
