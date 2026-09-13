import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  background: ${({ theme }) => theme.yellow};
  overflow: hidden;
  min-height: 100svh;
  display: grid;
  place-items: center;
  padding: 96px 32px 48px;
  align-items: end;

  @media (max-width: 768px) {
    min-height: 90svh;
    padding: 96px 16px 48px;
  }
`;

export const Watermark = styled.p`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  font-size: clamp(30px, 8vw, 98px);
  font-weight: 900;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.black};
  opacity: 0.08;
  pointer-events: none;
  line-height: 1;
`;

export const Cluster = styled.div`
  position: relative;
  z-index: 1;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  width: min(100%, 1312px);
  grid-template-columns: minmax(250px, 1fr) 440px minmax(250px, 1fr);
  gap: 32px;
  align-items: end;

  @media (max-width: 1023px) and (min-width: 701px) {
    grid-template-columns: minmax(0, 1fr) 340px minmax(0, 1fr);
    gap: 8px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }
`;

export const TextBlock = styled.div<{ $align?: "right" }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $align }) =>
    $align === "right" ? "flex-end" : "flex-start"};
  gap: 16px;
  justify-items: bottom;

  @media (max-width: 700px) {
    align-items: center;
    order: ${({ $align }) => ($align === "right" ? 3 : 2)};
  }
`;

export const Role = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
  color: ${({ theme }) => theme.black};
  text-wrap: balance;

  @media (max-width: 1023px) and (min-width: 701px) {
    font-size: 12px;
  }
`;

export const Availability = styled.span`
  display: block;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.purple};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`;

export const Name = styled.h1`
  font-size: clamp(48px, 8vw, 76px);
  font-weight: 900;
  letter-spacing: 0;
  text-transform: uppercase;
  line-height: 0.9;
  color: ${({ theme }) => theme.black};
  text-wrap: balance;

  @media (max-width: 1023px) and (min-width: 701px) {
    font-size: 42px;
  }

  @media (width <= 767px) {
    display: none;
  }
`;

export const Intro = styled.p`
  max-width: 340px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  color: ${({ theme }) => theme.black};

  @media (max-width: 1023px) and (min-width: 701px) {
    max-width: 170px;
    font-size: 10px;
    line-height: 1.4;
  }
`;
