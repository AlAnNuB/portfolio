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
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
  min-height: 220px;
  padding: 24px;
  border-radius: ${({ theme }) => theme.radiusSm};
  background:
    linear-gradient(180deg, rgba(36, 34, 45, 0.15) 0%, rgba(36, 34, 45, 0.92) 100%),
    repeating-linear-gradient(
      135deg,
      ${({ theme }) => theme.black} 0 12px,
      #2e2c38 12px 24px
    );
  color: ${({ theme }) => theme.white};
  transition-property: transform, box-shadow;
  transition-duration: 180ms;
  transition-timing-function: ease-out;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-4px);
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Tag = styled.span`
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
  line-height: 1.6;
  color: ${({ theme }) => theme.white};
  opacity: 0.85;
`;
