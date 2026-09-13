import styled from "styled-components";

export const Section = styled.section`
  background: ${({ theme }) => theme.black};
  padding: 80px 32px;

  @media (max-width: 768px) {
    padding: 56px 16px;
  }
`;

export const Inner = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 64px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Lead = styled.h2`
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 800;
  line-height: 1.15;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  text-wrap: balance;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${({ theme }) => theme.white};

  strong {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  span {
    font-size: 14px;
    line-height: 1.6;
    opacity: 0.82;
    font-weight: 400;
  }
`;

export const Hive = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  max-width: 420px;
  margin: 0 auto;
`;

export const StatHex = styled.div<{ $shift: boolean }>`
  transform: ${({ $shift }) => ($shift ? "translateY(28px)" : "none")};

  @media (max-width: 768px) {
    transform: none;
  }

  div {
    text-align: center;
    padding: 8px;
  }
`;

export const StatValue = styled.p`
  font-size: 32px;
  font-weight: 900;
  color: ${({ theme }) => theme.black};
  font-variant-numeric: tabular-nums;
`;

export const StatLabel = styled.p`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.black};
  max-width: 110px;
  margin: 4px auto 0;
  line-height: 1.3;
`;
