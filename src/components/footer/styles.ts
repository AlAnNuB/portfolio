import styled from "styled-components";

export const Band = styled.div`
  background: ${({ theme }) => theme.black};
`;

export const Shell = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 8px 32px 28px;

  @media (max-width: 768px) {
    padding: 8px 16px 24px;
  }
`;

export const Copy = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.white};
`;

export const Icons = styled.div`
  display: flex;
  gap: 4px;
`;

export const IconLink = styled.a`
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.white};

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.yellow};
    }
  }
`;
