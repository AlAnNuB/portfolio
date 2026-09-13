import styled from "styled-components";

export const Section = styled.section`
  background: ${({ theme }) => theme.yellow};
  padding: 80px 32px;

  @media (max-width: 768px) {
    padding: 56px 16px;
  }
`;

export const Inner = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  min-height: 220px;
  padding: 32px 28px;
  border-radius: ${({ theme }) => theme.radiusSm};
  background:
    linear-gradient(180deg, rgba(36, 34, 45, 0.55) 0%, rgba(36, 34, 45, 0.92) 100%),
    ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    margin-top: 8px;
    font-size: 14px;
    line-height: 1.6;
    opacity: 0.88;
  }
`;

export const Kind = styled.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.yellow};
`;

export const Title = styled.h3`
  font-size: 22px;
  font-weight: 800;
  text-transform: uppercase;
`;

export const Meta = styled.p`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  opacity: 0.8;
`;
