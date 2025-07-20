import styled from "styled-components";

export const Content = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
    gap: 2rem;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: var(--max-width);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const ContactItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  border-radius: 50%;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  svg {
    width: 2rem;
    height: 2rem;
    fill:  ${({ theme }) => theme.primaryColor};
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.primaryColor};
    box-shadow: 0 0 20px ${({ theme }) => theme.primaryColor};
  }
`;

export const Label = styled.h3`
  font-size: 1.2rem;
  font-weight: var(--font-semibold);
  color: ${({ theme }) => theme.color};
`;

export const Value = styled.p`
  font-size: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
